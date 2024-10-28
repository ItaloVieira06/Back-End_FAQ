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
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interface/user-interface.interface';
import { Role } from '../auth/role.enum';
import { Roles } from 'src/auth/role.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() params: CreateUserDTO): Promise<UserInterface> {
    return await this.userService.create(params);
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  async update(
    @Param('id', ParseIntPipe) id_user: number,
    @Body() data: UpdateUserDto,
  ): Promise<UserInterface> {
    return await this.userService.update({
      where: { id_user },
      data: data,
    });
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  async delete(
    @Param('id', ParseIntPipe) id_user: number,
  ): Promise<UserInterface> {
    return await this.userService.delete({ where: { id_user } });
  }

  @Get('search/all')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  async searchAll() {
    return await this.userService.searchAll();
  }

  @Get('search/:id')
  @UseGuards(AuthGuard)
  async searchOne(
    @Param('id', ParseIntPipe) id_user: number,
  ): Promise<UserInterface> {
    return await this.userService.searchOne({ where: { id_user } });
  }
}
