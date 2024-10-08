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

@Controller('question')
export class QuestionController {
  constructor(private readonly questionsService: QuestionService) {}
  @Post('register')
  async create(@Body() params: CreateQuestionDto): Promise<Questions> {
    return await this.questionsService.create(params);
  }
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id_question: number,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<Questions> {
    return await this.questionsService.update(id_question, updateQuestionDto);
  }
  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id_question: number,
  ): Promise<Questions> {
    return await this.questionsService.delete({ where: { id_question } });
  }
  @Get('search/all')
  async findAll() {
    return await this.questionsService.searchAll();
  }
  @Get('search/:id')
  async searchOne(
    @Param('id', ParseIntPipe) id_question: number,
  ): Promise<Questions> {
    return await this.questionsService.searchOne({ where: { id_question } });
  }
}
