import { CreateAwsnerDto } from './dto/create-awsner.dto';
import { UpdateAwsnerDto } from './dto/update-awsner.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { Awsner } from '@prisma/client';
export declare class AwsnerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: CreateAwsnerDto): Promise<Awsner>;
    update(params: {
        where: Prisma.AwsnerWhereUniqueInput;
        data: UpdateAwsnerDto;
    }): Promise<Awsner>;
    delete(params: {
        where: Prisma.AwsnerWhereUniqueInput;
    }): Promise<Awsner>;
    searchOne(params: {
        where: Prisma.AwsnerWhereUniqueInput;
    }): Promise<Awsner>;
    searchAll(): Promise<{
        awsner_main: string;
        user_id: number;
        question_id: number;
        id_awsner: number;
    }[]>;
}
