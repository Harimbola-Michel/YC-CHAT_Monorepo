import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string, ownerId: string) {
    const server = await this.prisma.server.create({ data: { name, ownerId } });
    await this.prisma.serverMember.create({ data: { serverId: server.id, userId: ownerId } });
    return server;
  }

  findAllForUser(userId: string) {
    return this.prisma.server.findMany({
      where: { members: { some: { userId } } },
    });
  }

  async findOne(id: string) {
    const server = await this.prisma.server.findUnique({
      where: { id },
      include: { categories: { include: { channels: true }, orderBy: { position: 'asc' } } },
    });
    if (!server) throw new NotFoundException('Serveur introuvable');
    return server;
  }

  addMember(serverId: string, userId: string) {
    return this.prisma.serverMember.create({ data: { serverId, userId } });
  }
}
