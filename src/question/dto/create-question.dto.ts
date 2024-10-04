import { IsInt, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  question_main: string;
  @IsInt()
  id_user: BigInteger;
  @IsInt()
  subject_question: BigInteger;
}
