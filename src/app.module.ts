import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  // Controllers get url and execute its function which inherits from service.
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
