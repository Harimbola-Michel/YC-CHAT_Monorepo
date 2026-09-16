import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ConversationsService } from './conversations.service';

@UseGuards(JwtAuthGuard)
@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversations: ConversationsService) {}

  @Get()
  findMine(@CurrentUser() user: { userId: string }) {
    return this.conversations.findForUser(user.userId);
  }

  @Post('with/:friendId')
  findOrCreate(
    @Param('friendId') friendId: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.conversations.findOrCreateOneToOne(user.userId, friendId);
  }

  @Get(':id/messages')
  findMessages(@Param('id') id: string) {
    return this.conversations.findMessages(id);
  }
}
