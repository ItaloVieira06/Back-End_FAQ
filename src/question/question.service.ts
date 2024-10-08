import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { Questions } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(params: CreateQuestionDto): Promise<Questions> {
    return await this.prisma.questions.create({ data: params });
  }

  async update(
    id_question: number,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<Questions> {
    return await this.prisma.questions.update({
      where: { id_question },
      data: updateQuestionDto,
    });
  }

  async delete(params: {
    where: Prisma.QuestionsWhereUniqueInput;
  }): Promise<Questions> {
    const { where } = params;
    return await this.prisma.questions.delete({
      where,
    });
  }

  async searchOne(params: {
    where: Prisma.QuestionsWhereUniqueInput;
  }): Promise<Questions> {
    const { where } = params;
    return await this.prisma.questions.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.questions.findMany();
  }
}
