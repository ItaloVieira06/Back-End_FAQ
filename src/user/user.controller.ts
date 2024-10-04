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
import { Users } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('registrer')
  async create(@Body() params: CreateUserDTO): Promise<Users> {
    return await this.userService.create(params);
  }
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id_user: number,
    @Body() data: any,
  ): Promise<Users> {
    return await this.userService.update({
      where: { id_user },
      data: data,
    });
  }
  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id_user: number): Promise<Users> {
    return await this.userService.delete({ where: { id_user } });
  }
  @Get('get/all')
  async findAll() {
    return await this.userService.searchAll();
  }
  @Get('search/:id')
  async searchOne(@Param('id', ParseIntPipe) id_user: number): Promise<Users> {
    return await this.userService.searchOne({ where: { id_user } });
  }
}
