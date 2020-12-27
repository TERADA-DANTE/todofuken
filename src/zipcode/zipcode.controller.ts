import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResultDto } from './dto/zipcode.dto';

@Controller('zipcode')
export class ZipcodeController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  findAll(): Promise<ResultDto[]> {
    return this.prismaService.result.findMany();
  }

  @Get('/:zipcode')
  findOne(@Param('zipcode') zipcode: string) {
    return this.prismaService.result.findUnique({
      where: {
        zipcode,
      },
    });
  }
}
