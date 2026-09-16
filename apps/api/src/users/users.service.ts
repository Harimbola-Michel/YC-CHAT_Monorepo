import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserStatus } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Utilisateur introuvable');
    return user;
  }

  setStatus(id: string, status: UserStatus) {
    return this.prisma.user.update({
      where: { id },
      data: {
        status,
        lastSeenAt: status === UserStatus.offline ? new Date() : undefined,
      },
    });
  }
}
