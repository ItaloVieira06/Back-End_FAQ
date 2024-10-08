import { IsString } from 'class-validator';
//validação de informações
export class CreateUserDTO {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
