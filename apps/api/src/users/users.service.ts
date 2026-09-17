import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

// Jamais renvoyer passwordHash au client — champs publics uniquement
const PUBLIC_USER_SELECT = {
  id: true,
  username: true,
  email: true,
  displayName: true,
  avatarUrl: true,
  avatarColor: true,
  status: true,
  lastSeenAt: true,
  createdAt: true,
} as const;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({ select: PUBLIC_USER_SELECT });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: PUBLIC_USER_SELECT,
    });
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

  // Met à jour username et/ou email en une seule opération (un seul bouton côté front)
  async updateProfile(userId: string, dto: UpdateProfileDto) {
    if (dto.username || dto.email) {
      const conflict = await this.prisma.user.findFirst({
        where: {
          id: { not: userId },
          OR: [
            ...(dto.username ? [{ username: dto.username }] : []),
            ...(dto.email ? [{ email: dto.email }] : []),
          ],
        },
      });
      if (conflict) {
        throw new ConflictException('Email ou nom d’utilisateur déjà utilisé');
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(dto.username ? { username: dto.username } : {}),
        ...(dto.email ? { email: dto.email } : {}),
      },
      select: PUBLIC_USER_SELECT,
    });
  }

  // Séparé de updateProfile : nécessite de vérifier l'ancien mot de passe
  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, passwordHash: true },
    });
    if (!user) throw new NotFoundException('Utilisateur introuvable');

    const valid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Mot de passe actuel incorrect');

    const passwordHash = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    return { success: true };
  }
}