import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  create(channelId: string, authorId: string, content: string) {
    return this.prisma.message.create({
      data: { channelId, authorId, content },
      include: { author: true, attachments: true },
    });
  }

  // Historique paginé (le plus récent en dernier, comme dans defaultMessages)
  async findByChannel(channelId: string, limit = 50, beforeId?: string) {
    let cursor: { createdAt: Date } | undefined;
    if (beforeId) {
      const before = await this.prisma.message.findUnique({ where: { id: beforeId } });
      if (before) cursor = { createdAt: before.createdAt };
    }

    const messages = await this.prisma.message.findMany({
      where: {
        channelId,
        ...(cursor ? { createdAt: { lt: cursor.createdAt } } : {}),
      },
      include: { author: true, attachments: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return messages.reverse();
  }
}
