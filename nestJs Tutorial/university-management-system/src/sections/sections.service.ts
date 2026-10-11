import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CoursesService } from '../courses/courses.service.js';
@Injectable()
export class SectionsService {
  constructor(
    @Inject(forwardRef(() => CoursesService))
    private readonly coursesService: any,
  ) {}
  getAllSections() {
    return [
      {
        sectionId: 1,
        courseId: 1,
        section: 'A',
      },
      {
        sectionId: 2,
        courseId: 1,
        section: 'B',
      },
    ];
  }

  getAllCourseAndSection() {
    return this.coursesService.getAllCourse();
  }
}
