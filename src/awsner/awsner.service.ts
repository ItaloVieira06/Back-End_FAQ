import { Injectable } from '@nestjs/common';
//import { CreateAwsnerDto } from './dto/create-awsner.dto';
//import { UpdateAwsnerDto } from './dto/update-awsner.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
//import { CreateAwsnerDTO } from './dto/create-awsner.dto';

@Injectable()
export class AwsnerService {
  constructor(private prisma: PrismaService) {}

  async create(params: any) {
    return await this.prisma.awsner.create({ data: params });
  }

  async update(params: { where: Prisma.AwsnerWhereUniqueInput; data: any }) {
    const { where, data } = params;
    return await this.prisma.awsner.update({
      where,
      data,
    });
  }

  async delete(params: { where: Prisma.AwsnerWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.awsner.delete({
      where,
    });
  }

  async searchOne(params: { where: Prisma.AwsnerWhereUniqueInput }) {
    const { where } = params;
    return await this.prisma.awsner.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.users.findMany();
  }
}
