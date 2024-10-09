import { IsInt, IsString } from 'class-validator';

export class CreateAwsnerDto {
  @IsString()
  awsner_main: string;
  @IsInt()
  user_id: number;
  @IsInt()
  question_id: number;
}
