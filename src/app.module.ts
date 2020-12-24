import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  // Controllers get url and execute its function which inherits from service.
  controllers: [PostsController],
  providers: [],
})
export class AppModule {}
