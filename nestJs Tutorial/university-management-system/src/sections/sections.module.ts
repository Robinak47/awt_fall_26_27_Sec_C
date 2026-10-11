import { forwardRef, Module } from '@nestjs/common';
import { SectionsService } from './sections.service.js';
import { SectionsController } from './sections.controller.js';
import { CoursesModule } from '../courses/courses.module.js';

@Module({
  imports: [forwardRef(() => CoursesModule)],
  controllers: [SectionsController],
  providers: [SectionsService],
  exports: [SectionsService],
})
export class SectionsModule {}
