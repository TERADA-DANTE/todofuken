import { Module } from '@nestjs/common';
import { ZipcodeController } from './zipcode.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [ZipcodeController],
  providers: [],
})
export class ZipcodeModule {}
