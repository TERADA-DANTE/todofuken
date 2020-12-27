import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { ZipcodeModule } from './zipcode/zipcode.module';

@Module({
  imports: [PrismaModule, ZipcodeModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
