import { CreateQuestionDto } from './dto/create-question.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
export declare class QuestionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: any): Promise<{
        id_question: number;
        question_main: string;
        subject_id: number;
        user_id: number;
    }>;
    update(params: {
        where: Prisma.QuestionsWhereUniqueInput;
        data: CreateQuestionDto;
    }): Promise<{
        id_question: number;
        question_main: string;
        subject_id: number;
        user_id: number;
    }>;
    delete(params: {
        where: Prisma.QuestionsWhereUniqueInput;
    }): Promise<{
        id_question: number;
        question_main: string;
        subject_id: number;
        user_id: number;
    }>;
    searchOne(params: {
        where: Prisma.QuestionsWhereUniqueInput;
    }): Promise<{
        id_question: number;
        question_main: string;
        subject_id: number;
        user_id: number;
    }>;
    searchAll(): Promise<{
        id_question: number;
        question_main: string;
        subject_id: number;
        user_id: number;
    }[]>;
}
