import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Users } from '@prisma/client';
import { UserInterface } from './interface/user-interface.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(params: CreateUserDTO): Promise<UserInterface> {
    return await this.prisma.users.create({ data: params });
  }

  async update(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: UpdateUserDto;
  }): Promise<UserInterface> {
    const { where, data } = params;
    return await this.prisma.users.update({
      where,
      data,
    });
  }

  async delete(params: {
    where: Prisma.UsersWhereUniqueInput;
  }): Promise<UserInterface> {
    const { where } = params;
    return await this.prisma.users.delete({
      where,
    });
  }

  async searchOne(params: {
    where: Prisma.UsersWhereUniqueInput;
  }): Promise<UserInterface> {
    const { where } = params;
    return await this.prisma.users.findUnique({
      where,
    });
  }

  async searchAll() {
    return await this.prisma.users.findMany();
  }
}
