import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(serverId: string, label: string, position = 0) {
    return this.prisma.category.create({ data: { serverId, label, position } });
  }

  findByServer(serverId: string) {
    return this.prisma.category.findMany({
      where: { serverId },
      include: { channels: { orderBy: { position: 'asc' } } },
      orderBy: { position: 'asc' },
    });
  }
}
