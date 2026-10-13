import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetParamDTO } from './dtos/GetParam.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findUserById/:id')
  getUserWithId(@Param() params: GetParamDTO) {
    console.log(params.id, typeof params.id);
  }

  @Get('findUser')
  getUserByName(
    @Query('name', new DefaultValuePipe('Ronaldo')) name: any,
    @Query('isFootballer', ParseBoolPipe) isFootballer: boolean,
  ) {
    console.log(name);
    console.log(typeof name);
    console.log(isFootballer);
    console.log(typeof isFootballer);
  }

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.gender);
    console.log(user.age);
    console.log(user.email);
    console.log(user.address);
    console.log(user.isBangladeshi);
    console.log(user.password);

    return 'user created successfully';
  }

  @Patch('update-user/:id')
  updateUserPartially(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return `updated user Partially of Id ${id}`;
  }
}
