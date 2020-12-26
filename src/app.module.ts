import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PrismaModule, PostsModule],
  // Controllers get url and execute its function which inherits from service.
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
