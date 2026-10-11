import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service.js';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get(':id')
  getAllStudentListFromCourseId(@Param('id') id: string) {
    return this.coursesService.getAllStudentListFromCourseId(id);
  }

  @Get()
  getAllCourseWithSection() {
    return this.coursesService.getAllCourseWithSection();
  }
}
