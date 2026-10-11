import { Controller, Get } from '@nestjs/common';
import { SectionsService } from './sections.service.js';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  GetAllSections() {
    return this.sectionsService.getAllCourseAndSection();
  }
}
