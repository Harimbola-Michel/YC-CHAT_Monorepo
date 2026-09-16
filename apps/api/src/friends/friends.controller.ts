import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { FriendsService } from './friends.service';
import { FriendshipStatus } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('friends')
export class FriendsController {
  constructor(private readonly friends: FriendsService) {}

  @Get()
  findAccepted(@CurrentUser() user: { userId: string }) {
    return this.friends.findAccepted(user.userId);
  }

  @Get('pending')
  findPending(@CurrentUser() user: { userId: string }) {
    return this.friends.findPendingReceived(user.userId);
  }

  @Post(':addresseeId')
  sendRequest(
    @Param('addresseeId') addresseeId: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.friends.sendRequest(user.userId, addresseeId);
  }

  @Patch(':id')
  respond(
    @Param('id') id: string,
    @Body('status') status: Exclude<FriendshipStatus, 'pending'>,
  ) {
    return this.friends.respond(id, status);
  }
}
