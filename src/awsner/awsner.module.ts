import { Module } from '@nestjs/common';
import { AwsnerService } from './awsner.service';
import { AwsnerController } from './awsner.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AwsnerController],
  providers: [AwsnerService],
  imports: [DatabaseModule],
})
export class AwsnerModule {}
