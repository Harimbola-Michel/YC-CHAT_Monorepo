import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChannelType } from '@prisma/client';

@Injectable()
export class ChannelsService {
  constructor(private readonly prisma: PrismaService) {}

  create(categoryId: string, name: string, type: ChannelType = ChannelType.text) {
    return this.prisma.channel.create({ data: { categoryId, name, type } });
  }

  async findById(id: string) {
    const channel = await this.prisma.channel.findUnique({ where: { id } });
    if (!channel) throw new NotFoundException('Canal introuvable');
    return channel;
  }
}
