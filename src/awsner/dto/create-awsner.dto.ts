import { IsInt, IsString } from 'class-validator';

export class CreateAwsnerDto {
  @IsString()
  awsner_main: string;
  @IsInt()
  awsner_id: BigInteger;
  @IsInt()
  question_id: BigInteger;
}
