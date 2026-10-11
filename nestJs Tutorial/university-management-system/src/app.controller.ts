import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getResult')
  getResult(): string {
    return 'Geeting result';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
