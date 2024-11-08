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
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateAwsnerDto } from 'src/awsner/dto/update-awsner.dto';
import { Subjects } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { Role } from 'src/auth/role.enum';
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post('register')
  async create(@Body() params: CreateSubjectDto): Promise<Subjects> {
    return await this.subjectService.create(params);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id_subject: number,
    @Body() data: UpdateAwsnerDto,
  ): Promise<Subjects> {
    return await this.subjectService.update({
      where: { id_subject },
      data: data,
    });
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id_subject: number,
  ): Promise<Subjects> {
    return await this.subjectService.delete({ where: { id_subject } });
  }

  @Get('search/all')
  async findAll() {
    return await this.subjectService.searchAll();
  }

  @Get('search/:id')
  async searchOne(
    @Param('id', ParseIntPipe) id_subject: number,
  ): Promise<Subjects> {
    return await this.subjectService.searchOne({ where: { id_subject } });
  }
}
