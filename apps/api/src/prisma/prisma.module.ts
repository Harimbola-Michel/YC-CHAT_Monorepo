import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global : évite de ré-importer PrismaModule dans chaque module métier
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
