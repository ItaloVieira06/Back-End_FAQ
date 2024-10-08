import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateAwsnerDto } from 'src/awsner/dto/update-awsner.dto';
import { Subjects } from '@prisma/client';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(params: CreateSubjectDto): Promise<Subjects> {
    return await this.prisma.subjects.create({ data: params });
  }

  async update(params: {
    where: Prisma.SubjectsWhereUniqueInput;
    data: UpdateAwsnerDto;
  }): Promise<Subjects> {
    const { where, data } = params;
    return await this.prisma.subjects.update({
      where,
      data,
    });
  }

  async delete(params: {
    where: Prisma.SubjectsWhereUniqueInput;
  }): Promise<Subjects> {
    const { where } = params;
    return await this.prisma.subjects.delete({
      where,
    });
  }

  async searchOne(params: {
    where: Prisma.SubjectsWhereUniqueInput;
  }): Promise<Subjects> {
    const { where } = params;
    return await this.prisma.subjects.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.subjects.findMany();
  }
}
