import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
export declare class AwsnerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: any): Promise<{
        id_awsner: number;
        awsmer_main: string;
        user_id: number;
        question_id: number;
    }>;
    update(params: {
        where: Prisma.AwsnerWhereUniqueInput;
        data: any;
    }): Promise<{
        id_awsner: number;
        awsmer_main: string;
        user_id: number;
        question_id: number;
    }>;
    delete(params: {
        where: Prisma.AwsnerWhereUniqueInput;
    }): Promise<{
        id_awsner: number;
        awsmer_main: string;
        user_id: number;
        question_id: number;
    }>;
    searchOne(params: {
        where: Prisma.AwsnerWhereUniqueInput;
    }): Promise<{
        id_awsner: number;
        awsmer_main: string;
        user_id: number;
        question_id: number;
    }>;
    searchAll(): Promise<{
        name: string;
        id_user: number;
        email: string;
        password: string;
    }[]>;
}
