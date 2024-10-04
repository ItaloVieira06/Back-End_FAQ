import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [DatabaseModule],
})
export class SubjectModule {}
