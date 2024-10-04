import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(params: any) {
    return await this.prisma.subjects.create({ data: params });
  }

  async update(params: { where: Prisma.SubjectsWhereUniqueInput; data: any }) {
    const { where, data } = params;
    return await this.prisma.subjects.update({
      where,
      data,
    });
  }

  async delete(params: { where: Prisma.SubjectsWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.subjects.delete({
      where,
    });
  }

  async searchOne(params: { where: Prisma.SubjectsWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.subjects.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.subjects.findMany();
  }
}
