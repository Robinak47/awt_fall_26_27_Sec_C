import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { MyCustomService } from './myCustomService.service.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService, MyCustomService],
})
export class UsersModule {}
