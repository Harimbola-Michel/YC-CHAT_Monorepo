import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChannelsService } from './channels.service';
import { ChannelType } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('categories/:categoryId/channels')
export class ChannelsController {
  constructor(private readonly channels: ChannelsService) {}

  @Post()
  create(
    @Param('categoryId') categoryId: string,
    @Body('name') name: string,
    @Body('type') type: ChannelType,
  ) {
    return this.channels.create(categoryId, name, type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channels.findById(id);
  }
}
