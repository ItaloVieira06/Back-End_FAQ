import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interface/user-interface.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //função de criar usuário
  async create(params: CreateUserDTO): Promise<UserInterface> {
    //encriptação
    params.password = bcrypt.hashSync(params.password, 8);
    //criação de usuário
    return await this.prisma.users.create({ data: params });
  }
  //função para adaptação
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
  //função de deletação de usuário
  async delete(params: {
    where: Prisma.UsersWhereUniqueInput;
  }): Promise<UserInterface> {
    const { where } = params;
    return await this.prisma.users.delete({
      where,
    });
  }
  //função de pesquisa de usuário específico
  async searchOne(params: {
    where: Prisma.UsersWhereUniqueInput;
  }): Promise<UserInterface> {
    const { where } = params;
    return await this.prisma.users.findUnique({
      where,
      select: {
        id_user: true,
        name: true,
        email: true,
      },
    });
  }
  //função de pesquisa de todos os usuário
  async searchAll() {
    return await this.prisma.users.findMany({
      select: {
        id_user: true,
        name: true,
        email: true,
      },
    });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
