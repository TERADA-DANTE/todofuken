import { Controller, Get, Param } from '@nestjs/common';
import { Result } from './enitities/result.entity';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  // Naming convention
  @Get('/:zipcode')
  //getAddressById
  getAddress(@Param('zipcode') zipcode: string): Result {
    return this.postsService.getAddress(zipcode);
  }
}
