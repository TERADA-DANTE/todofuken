import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Result } from './enitities/result.entity';
import { ResultDto } from './posts.dto';
// import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private readonly prismaService: PrismaService) {}
  // Naming convention

  // @Get('/:zipcode')
  // //getAddressById
  // getAddress(@Param('zipcode') zipcode: string): Result {
  //   return this.postsService.getAddress(zipcode);
  // }
  @Get()
  findAll(): Promise<ResultDto[]> {
    return this.prismaService.result.findMany();
  }

  // @Post()
  // create(
  //   @Body() { zipcode, prefecture, city, area, code }: ResultDto,
  // ): Promise<ResultDto> {
  //   return this.prismaService.result.create({
  //     data: { zipcode, prefecture, city, area, code },
  //   });
  // }
}
