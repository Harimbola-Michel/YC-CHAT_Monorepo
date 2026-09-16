import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FriendshipStatus } from '@prisma/client';

@Injectable()
export class FriendsService {
  constructor(private readonly prisma: PrismaService) {}

  sendRequest(requesterId: string, addresseeId: string) {
    if (requesterId === addresseeId) {
      throw new BadRequestException("On ne peut pas s'ajouter soi-même");
    }
    return this.prisma.friendship.create({ data: { requesterId, addresseeId } });
  }

  async respond(id: string, status: Exclude<FriendshipStatus, 'pending'>) {
    const friendship = await this.prisma.friendship.findUnique({ where: { id } });
    if (!friendship) throw new NotFoundException('Demande introuvable');
    return this.prisma.friendship.update({ where: { id }, data: { status } });
  }

  // Liste des amis acceptés, dans les deux sens de la relation — correspond à `friends` du front
  findAccepted(userId: string) {
    return this.prisma.friendship.findMany({
      where: {
        status: FriendshipStatus.accepted,
        OR: [{ requesterId: userId }, { addresseeId: userId }],
      },
      include: { requester: true, addressee: true },
    });
  }

  findPendingReceived(userId: string) {
    return this.prisma.friendship.findMany({
      where: { addresseeId: userId, status: FriendshipStatus.pending },
      include: { requester: true },
    });
  }
}
