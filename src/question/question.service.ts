import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
//import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(params: any) {
    return await this.prisma.questions.create({ data: params });
  }

  async update(params: {
    where: Prisma.QuestionsWhereUniqueInput;
    data: CreateQuestionDto;
  }) {
    const { where, data } = params;
    return await this.prisma.questions.update({
      where,
      data,
    });
  }

  async delete(params: { where: Prisma.QuestionsWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.questions.delete({
      where,
    });
  }

  async searchOne(params: { where: Prisma.QuestionsWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.questions.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.questions.findMany();
  }
}
