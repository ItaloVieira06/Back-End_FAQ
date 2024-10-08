import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
//import { Users } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interface/user-interface.interface';

@Controller('user')
export class UserController {
  //construtor de suporte
  constructor(private readonly userService: UserService) {}
  //criação de usuário
  @Post('register')
  async create(@Body() params: CreateUserDTO): Promise<UserInterface> {
    return await this.userService.create(params);
  }
  //atualização de usuário pelo id
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id_user: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserInterface> {
    return await this.userService.update({
      where: { id_user },
      data: data,
    });
  }
  //deletação de usuário por id
  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id_user: number,
  ): Promise<UserInterface> {
    return await this.userService.delete({ where: { id_user } });
  }
  //pesquisa geral de usuários
  @Get('search/all')
  async searchAll() {
    return await this.userService.searchAll();
  }
  //pesquisa específica de usuário pelo id
  @Get('search/:id')
  async searchOne(
    @Param('id', ParseIntPipe) id_user: number,
  ): Promise<UserInterface> {
    return await this.userService.searchOne({ where: { id_user } });
  }
}
