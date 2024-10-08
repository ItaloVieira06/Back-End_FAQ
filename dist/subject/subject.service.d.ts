import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateAwsnerDto } from 'src/awsner/dto/update-awsner.dto';
import { Subjects } from '@prisma/client';
export declare class SubjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: CreateSubjectDto): Promise<Subjects>;
    update(params: {
        where: Prisma.SubjectsWhereUniqueInput;
        data: UpdateAwsnerDto;
    }): Promise<Subjects>;
    delete(params: {
        where: Prisma.SubjectsWhereUniqueInput;
    }): Promise<Subjects>;
    searchOne(params: {
        where: Prisma.SubjectsWhereUniqueInput;
    }): Promise<Subjects>;
    searchAll(): Promise<{
        name: string;
        id_subject: number;
    }[]>;
}
