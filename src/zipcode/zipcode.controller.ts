import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResultDto } from './dto/zipcode.dto';

@Controller('api/v1/')
export class ZipcodeController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('')
  findMany(): string {
    return 'This endpoint is not supported for performance reason.\n Try /$zipcode';
    //return this.prismaService.result.findMany();
  }

  @Get('/:zipcode')
  findFirst(@Param('zipcode') zipcode: string): Promise<ResultDto | null> {
    return this.prismaService.result.findUnique({
      where: {
        zipcode,
      },
    });
  }
}
