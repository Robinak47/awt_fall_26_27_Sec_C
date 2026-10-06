import { Controller } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { MyCustomService } from './myCustomService.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: MyCustomService) {}
}
