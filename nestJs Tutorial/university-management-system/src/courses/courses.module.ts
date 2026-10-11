import { forwardRef, Module } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { CoursesController } from './courses.controller.js';
import { StudentsModule } from '../students/students.module.js';
import { SectionsService } from '../sections/sections.service.js';
import { SectionsModule } from '../sections/sections.module.js';

@Module({
  imports: [StudentsModule, forwardRef(() => SectionsModule)],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
