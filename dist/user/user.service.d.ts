import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interface/user-interface.interface';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: CreateUserDTO): Promise<UserInterface>;
    update(params: {
        where: Prisma.UsersWhereUniqueInput;
        data: UpdateUserDto;
    }): Promise<UserInterface>;
    delete(params: {
        where: Prisma.UsersWhereUniqueInput;
    }): Promise<UserInterface>;
    searchOne(params: {
        where: Prisma.UsersWhereUniqueInput;
    }): Promise<UserInterface>;
    searchAll(): Promise<{
        name: string;
        email: string;
        id_user: number;
    }[]>;
}
