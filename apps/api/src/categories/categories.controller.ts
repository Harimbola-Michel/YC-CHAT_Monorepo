import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';

@UseGuards(JwtAuthGuard)
@Controller('servers/:serverId/categories')
export class CategoriesController {
  constructor(private readonly categories: CategoriesService) {}

  @Post()
  create(@Param('serverId') serverId: string, @Body('label') label: string) {
    return this.categories.create(serverId, label);
  }

  @Get()
  findByServer(@Param('serverId') serverId: string) {
    return this.categories.findByServer(serverId);
  }
}
