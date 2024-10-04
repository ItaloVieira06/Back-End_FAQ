import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: CreateUserDTO): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }>;
    update(params: {
        where: Prisma.UsersWhereUniqueInput;
        data: any;
    }): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }>;
    delete(params: {
        where: Prisma.UsersWhereUniqueInput;
    }): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }>;
    searchOne(params: {
        where: Prisma.UsersWhereUniqueInput;
    }): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }>;
    searchAll(): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }[]>;
}
