import { AwsnerService } from './awsner.service';
import { CreateAwsnerDto } from './dto/create-awsner.dto';
import { UpdateAwsnerDto } from './dto/update-awsner.dto';
import { Awsner } from '@prisma/client';
export declare class AwsnerController {
    private readonly awsnerService;
    constructor(awsnerService: AwsnerService);
    create(params: CreateAwsnerDto): Promise<Awsner>;
    update(id_awsner: number, data: UpdateAwsnerDto): Promise<Awsner>;
    delete(id_awsner: number): Promise<Awsner>;
    findAll(): Promise<{
        awsmer_main: string;
        user_id: number;
        question_id: number;
        id_awsner: number;
    }[]>;
    searchOne(id_awsner: number): Promise<Awsner>;
}
