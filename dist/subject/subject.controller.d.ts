import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateAwsnerDto } from 'src/awsner/dto/update-awsner.dto';
import { Subjects } from '@prisma/client';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    create(params: CreateSubjectDto): Promise<Subjects>;
    update(id_subject: number, data: UpdateAwsnerDto): Promise<Subjects>;
    delete(id_subject: number): Promise<Subjects>;
    findAll(): Promise<{
        name: string;
        id_subject: number;
    }[]>;
    searchOne(id_subject: number): Promise<Subjects>;
}
