import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { MessagesService } from './messages.service';

@UseGuards(JwtAuthGuard)
@Controller('channels/:channelId/messages')
export class MessagesController {
  constructor(private readonly messages: MessagesService) {}

  @Get()
  findByChannel(
    @Param('channelId') channelId: string,
    @Query('limit') limit?: string,
    @Query('before') before?: string,
  ) {
    return this.messages.findByChannel(channelId, limit ? Number(limit) : 50, before);
  }

  // Endpoint REST de secours — en usage normal, l'envoi passe par la Gateway Socket.io
  @Post()
  create(
    @Param('channelId') channelId: string,
    @Body('content') content: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.messages.create(channelId, user.userId, content);
  }
}
