import { Module } from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { StudentsController } from './students.controller.js';
import { StudentsHelper } from './studentsHelper.service.js';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsHelper],
  exports: [StudentsService],
})
export class StudentsModule {}
