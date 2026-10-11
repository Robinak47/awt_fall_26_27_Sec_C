import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  getAllStudentList() {
    return [
      {
        studentId: 1,
        name: 'Mr.Meow',
        cgpa: 3.99,
      },
      {
        studentId: 2,
        name: 'Mr Tom',
        cgpa: 2.49,
      },
    ];
  }
}
