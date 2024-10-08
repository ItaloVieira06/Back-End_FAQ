import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';
//validação para atualização
export class UpdateUserDto extends PartialType(CreateUserDTO) {}
