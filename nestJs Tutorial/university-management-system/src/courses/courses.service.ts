import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service.js';
import { SectionsService } from '../sections/sections.service.js';

@Injectable()
export class CoursesService {
  constructor(
    private readonly studentsService: StudentsService,
    @Inject(forwardRef(() => SectionsService))
    private readonly sectionsService: SectionsService,
  ) {}

  getAllStudentListFromCourseId(id: string) {
    return this.studentsService.getAllStudentList();
  }

  getAllCourseWithSection() {
    return this.sectionsService.getAllSections();
  }

  getAllCourse() {
    return [
      {
        courseCode: 'csc4161',
        courseName: 'Advance Programming in Web Technology',
      },
    ];
  }
}
