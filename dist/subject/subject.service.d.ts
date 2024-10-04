import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SubjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: any): Promise<{
        name: string;
        id_subject: number;
    }>;
    update(params: {
        where: Prisma.SubjectsWhereUniqueInput;
        data: any;
    }): Promise<{
        name: string;
        id_subject: number;
    }>;
    delete(params: {
        where: Prisma.SubjectsWhereUniqueInput;
    }): Promise<{
        name: string;
        id_subject: number;
    }>;
    searchOne(params: {
        where: Prisma.SubjectsWhereUniqueInput;
    }): Promise<{
        name: string;
        id_subject: number;
    }>;
    searchAll(): Promise<{
        name: string;
        id_subject: number;
    }[]>;
}
