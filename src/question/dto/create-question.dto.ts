import { IsInt, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  question_main: string;
  @IsInt()
  user_id: number;
  @IsInt()
  subject_id: number;
}
