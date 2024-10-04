import { PartialType } from '@nestjs/mapped-types';
import { CreateAwsnerDto } from './create-awsner.dto';

export class UpdateAwsnerDto extends PartialType(CreateAwsnerDto) {}
