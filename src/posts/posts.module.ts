import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [PrismaService],
  controllers: [PostsController],
})
export class PostsModule {}
