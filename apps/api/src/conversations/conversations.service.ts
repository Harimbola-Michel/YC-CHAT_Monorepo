import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversationsService {
  constructor(private readonly prisma: PrismaService) {}

  // Récupère la conversation 1-1 existante entre deux users, ou la crée
  async findOrCreateOneToOne(userAId: string, userBId: string) {
    const existing = await this.prisma.conversation.findFirst({
      where: {
        isGroup: false,
        AND: [
          { participants: { some: { userId: userAId } } },
          { participants: { some: { userId: userBId } } },
        ],
      },
    });
    if (existing) return existing;

    return this.prisma.conversation.create({
      data: {
        isGroup: false,
        participants: {
          create: [{ userId: userAId }, { userId: userBId }],
        },
      },
    });
  }

  findForUser(userId: string) {
    return this.prisma.conversation.findMany({
      where: { participants: { some: { userId } } },
      include: { participants: { include: { user: true } } },
    });
  }

  sendMessage(conversationId: string, authorId: string, content: string) {
    return this.prisma.directMessage.create({
      data: { conversationId, authorId, content },
      include: { author: true },
    });
  }

  findMessages(conversationId: string, limit = 50) {
    return this.prisma.directMessage.findMany({
      where: { conversationId },
      include: { author: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }
}
