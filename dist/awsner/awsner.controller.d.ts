import { AwsnerService } from './awsner.service';
import { CreateAwsnerDto } from './dto/create-awsner.dto';
import { Awsner } from '@prisma/client';
export declare class AwsnerController {
    private readonly awsnerService;
    constructor(awsnerService: AwsnerService);
    create(params: CreateAwsnerDto): Promise<Awsner>;
    update(id_awsner: number, data: any): Promise<Awsner>;
    delete(id_awsner: number): Promise<Awsner>;
    findAll(): Promise<{
        name: string;
        id_user: number;
        email: string;
        password: string;
    }[]>;
    searchOne(id_awsner: number): Promise<Awsner>;
}
