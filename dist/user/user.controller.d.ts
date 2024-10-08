import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interface/user-interface.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(params: CreateUserDTO): Promise<UserInterface>;
    update(id_user: number, data: UpdateUserDto): Promise<UserInterface>;
    delete(id_user: number): Promise<UserInterface>;
    searchAll(): Promise<{
        id_user: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    searchOne(id_user: number): Promise<UserInterface>;
}
