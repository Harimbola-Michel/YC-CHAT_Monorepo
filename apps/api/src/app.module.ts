import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { CategoriesModule } from './categories/categories.module';
import { ChannelsModule } from './channels/channels.module';
import { MessagesModule } from './messages/messages.module';
import { FriendsModule } from './friends/friends.module';
import { ConversationsModule } from './conversations/conversations.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ServersModule,
    CategoriesModule,
    ChannelsModule,
    MessagesModule,
    FriendsModule,
    ConversationsModule,
    ChatModule,
  ],
})
export class AppModule {}
