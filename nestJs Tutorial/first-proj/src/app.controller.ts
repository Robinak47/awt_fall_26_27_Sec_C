import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get2')
  getHello2(): string {
    return 'from get2';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
