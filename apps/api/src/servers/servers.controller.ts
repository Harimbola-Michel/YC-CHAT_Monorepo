import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ServersService } from './servers.service';

@UseGuards(JwtAuthGuard)
@Controller('servers')
export class ServersController {
  constructor(private readonly servers: ServersService) {}

  @Post()
  create(@Body('name') name: string, @CurrentUser() user: { userId: string }) {
    return this.servers.create(name, user.userId);
  }

  @Get()
  findMine(@CurrentUser() user: { userId: string }) {
    return this.servers.findAllForUser(user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servers.findOne(id);
  }

  @Post(':id/members')
  addMember(@Param('id') id: string, @Body('userId') userId: string) {
    return this.servers.addMember(id, userId);
  }
}
