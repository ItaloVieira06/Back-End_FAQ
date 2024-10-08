import { IsInt, IsString } from 'class-validator';

export class CreateAwsnerDto {
  @IsString()
  awsmer_main: string;
  @IsInt()
  user_id: number;
  @IsInt()
  question_id: number;
}
