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
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Questions } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionsService: QuestionService) {}

  @Post('register')
  @UseGuards(AuthGuard)
  async create(@Body() params: CreateQuestionDto): Promise<Questions> {
    return await this.questionsService.create(params);
  }

  @Patch('update/:id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async update(
    @Param('id', ParseIntPipe) id_question: number,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<Questions> {
    return await this.questionsService.update(id_question, updateQuestionDto);
  }

  @Delete('delete/:id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async delete(
    @Param('id', ParseIntPipe) id_question: number,
  ): Promise<Questions> {
    return await this.questionsService.delete({ where: { id_question } });
  }

  @Get('search/all')
  @UseGuards(AuthGuard)
  async findAll() {
    return await this.questionsService.searchAll();
  }

  @Get('search/:id')
  @UseGuards(AuthGuard)
  async searchOne(
    @Param('id', ParseIntPipe) id_question: number,
  ): Promise<Questions> {
    return await this.questionsService.searchOne({ where: { id_question } });
  }
}
