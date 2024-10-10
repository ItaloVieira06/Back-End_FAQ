import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Questions } from '@prisma/client';
export declare class QuestionController {
    private readonly questionsService;
    constructor(questionsService: QuestionService);
    create(params: CreateQuestionDto): Promise<Questions>;
    update(id_question: number, updateQuestionDto: UpdateQuestionDto): Promise<Questions>;
    delete(id_question: number): Promise<Questions>;
    findAll(): Promise<{
        user_id: number;
        question_main: string;
        subject_id: number;
        id_question: number;
    }[]>;
    searchOne(id_question: number): Promise<Questions>;
}
