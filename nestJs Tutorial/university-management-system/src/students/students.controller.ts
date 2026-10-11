import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Body,
  Headers,
} from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { StudentsHelper } from './studentsHelper.service.js';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly studentsHelper: StudentsHelper,
  ) {}

  @Get()
  getAllStudents() {
    return 'All Students List: ';
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return `students with id ${id}`;
  }

  @Get(':id/:name')
  getStudentByIdAndName(
    @Param('id') id: string,
    @Param('name') name: string,
    @Query('isGoat') isGoat?: string,
    @Query('numOfGoals') numOfGoals?: string,
  ) {
    if (isGoat && numOfGoals)
      return `students with id ${id} and name ${name} and isGoat: ${isGoat} and numOfGoals: ${numOfGoals}`;
    else return `students with id ${id} and name ${name} `;
  }

  @Post()
  createStudent(@Body() students: any, @Headers() head: any) {
    console.log(head);
    return `Student created with values:
    student Id: ${students.studentId},
    student Name:${students.studentName},
    student Cgpa: ${students.cgpa},
    student department: ${students.department},

    `;
  }

  @Put(':id')
  updateStudentFully() {
    return 'updated Students fully';
  }

  @Patch(':id')
  updateStudentPartially() {
    return 'updated Student partially';
  }

  @Delete(':id')
  deleteStudent() {
    return 'Student Deleted with Id';
  }
}
