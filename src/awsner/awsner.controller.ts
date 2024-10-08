import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AwsnerService } from './awsner.service';
import { CreateAwsnerDto } from './dto/create-awsner.dto';
import { UpdateAwsnerDto } from './dto/update-awsner.dto';
import { Awsner } from '@prisma/client';

@Controller('awsner')
export class AwsnerController {
  constructor(private readonly awsnerService: AwsnerService) {}
  @Post('register')
  async create(@Body() params: CreateAwsnerDto): Promise<Awsner> {
    return await this.awsnerService.create(params);
  }
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id_awsner: number,
    @Body() data: UpdateAwsnerDto,
  ): Promise<Awsner> {
    return await this.awsnerService.update({
      where: { id_awsner },
      data: data,
    });
  }
  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id_awsner: number): Promise<Awsner> {
    return await this.awsnerService.delete({ where: { id_awsner } });
  }
  @Get('search/all')
  async findAll() {
    return await this.awsnerService.searchAll();
  }
  @Get('search/:id')
  async searchOne(
    @Param('id', ParseIntPipe) id_awsner: number,
  ): Promise<Awsner> {
    return await this.awsnerService.searchOne({ where: { id_awsner } });
  }
}
