import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { Questions } from '@prisma/client';
export declare class QuestionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(params: CreateQuestionDto): Promise<Questions>;
    update(id_question: number, updateQuestionDto: UpdateQuestionDto): Promise<Questions>;
    delete(params: {
        where: Prisma.QuestionsWhereUniqueInput;
    }): Promise<Questions>;
    searchOne(params: {
        where: Prisma.QuestionsWhereUniqueInput;
    }): Promise<Questions>;
    searchAll(): Promise<{
        user_id: number;
        question_main: string;
        subject_id: number;
        id_question: number;
    }[]>;
}
