import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SubjectModule } from './subject/subject.module';
import { AwsnerModule } from './awsner/awsner.module';
import { QuestionModule } from './question/question.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    SubjectModule,
    AwsnerModule,
    QuestionModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
