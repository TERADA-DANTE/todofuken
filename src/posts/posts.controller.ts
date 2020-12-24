import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  // Naming convention
  @Get('/:zipcode')
  //getAddressById
  getAddress(@Param('zipcode') zipcode: number) {
    return `this will get zipcode : ${zipcode}`;
  }
}
