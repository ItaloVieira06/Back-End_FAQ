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
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('awsner')
export class AwsnerController {
  constructor(private readonly awsnerService: AwsnerService) {}

  @Post('register')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  async create(@Body() params: CreateAwsnerDto): Promise<Awsner> {
    return await this.awsnerService.create(params);
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
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
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  async delete(@Param('id', ParseIntPipe) id_awsner: number): Promise<Awsner> {
    return await this.awsnerService.delete({ where: { id_awsner } });
  }

  @Get('search/all')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  async findAll() {
    return await this.awsnerService.searchAll();
  }

  @Get('search/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  async searchOne(
    @Param('id', ParseIntPipe) id_awsner: number,
  ): Promise<Awsner> {
    return await this.awsnerService.searchOne({ where: { id_awsner } });
  }
}
