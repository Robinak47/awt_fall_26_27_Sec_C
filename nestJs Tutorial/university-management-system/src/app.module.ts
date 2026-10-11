import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StudentsModule } from './students/students.module.js';
import { CoursesModule } from './courses/courses.module.js';
import { SectionsModule } from './sections/sections.module.js';

@Module({
  imports: [StudentsModule, CoursesModule, SectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
