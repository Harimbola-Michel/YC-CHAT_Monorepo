import { Logger, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../messages/messages.service';
import { ConversationsService } from '../conversations/conversations.service';
import { UsersService } from '../users/users.service';
import { UserStatus } from '@prisma/client';

interface AuthenticatedSocket extends Socket {
  data: { userId: string; username: string };
}

@WebSocketGateway({
  cors: { origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173', credentials: true },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(ChatGateway.name);

  constructor(
    private readonly jwt: JwtService,
    private readonly messages: MessagesService,
    private readonly conversations: ConversationsService,
    private readonly users: UsersService,
  ) {}

  // --- Authentification à la connexion (token envoyé dans socket.handshake.auth.token) ---
  async handleConnection(client: AuthenticatedSocket) {
    try {
      const token = client.handshake.auth?.token as string;
      const payload = this.jwt.verify(token);
      client.data.userId = payload.sub;
      client.data.username = payload.username;

      await this.users.setStatus(payload.sub, UserStatus.online);
      this.server.emit('presence:update', { userId: payload.sub, status: UserStatus.online });
    } catch (err) {
      this.logger.warn(`Connexion refusée : ${err.message}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: AuthenticatedSocket) {
    if (!client.data?.userId) return;
    await this.users.setStatus(client.data.userId, UserStatus.offline);
    this.server.emit('presence:update', { userId: client.data.userId, status: UserStatus.offline });
  }

  // --- Canaux de serveur ---
  @SubscribeMessage('channel:join')
  onChannelJoin(@ConnectedSocket() client: AuthenticatedSocket, @MessageBody() { channelId }: { channelId: string }) {
    client.join(`channel:${channelId}`);
  }

  @SubscribeMessage('channel:leave')
  onChannelLeave(@ConnectedSocket() client: AuthenticatedSocket, @MessageBody() { channelId }: { channelId: string }) {
    client.leave(`channel:${channelId}`);
  }

  @SubscribeMessage('message:send')
  async onMessageSend(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() { channelId, content }: { channelId: string; content: string },
  ) {
    const message = await this.messages.create(channelId, client.data.userId, content);
    this.server.to(`channel:${channelId}`).emit('message:new', message);
    return message;
  }

  // --- Messages privés ---
  @SubscribeMessage('conversation:join')
  onConversationJoin(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() { conversationId }: { conversationId: string },
  ) {
    client.join(`conversation:${conversationId}`);
  }

  @SubscribeMessage('dm:send')
  async onDmSend(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() { conversationId, content }: { conversationId: string; content: string },
  ) {
    const message = await this.conversations.sendMessage(conversationId, client.data.userId, content);
    this.server.to(`conversation:${conversationId}`).emit('dm:new', message);
    return message;
  }

  // --- Indicateur de saisie ---
  @SubscribeMessage('typing:start')
  onTypingStart(@ConnectedSocket() client: AuthenticatedSocket, @MessageBody() body: { room: string }) {
    client.to(body.room).emit('typing:update', { userId: client.data.userId, typing: true });
  }

  @SubscribeMessage('typing:stop')
  onTypingStop(@ConnectedSocket() client: AuthenticatedSocket, @MessageBody() body: { room: string }) {
    client.to(body.room).emit('typing:update', { userId: client.data.userId, typing: false });
  }
}
