import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, PostsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
