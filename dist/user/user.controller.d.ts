import { UserService } from './user.service';
import { Users } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(params: CreateUserDTO): Promise<Users>;
    update(id_user: number, data: any): Promise<Users>;
    delete(id_user: number): Promise<Users>;
    findAll(): Promise<{
        name: string;
        email: string;
        password: string;
        id_user: number;
    }[]>;
    searchOne(id_user: number): Promise<Users>;
}
