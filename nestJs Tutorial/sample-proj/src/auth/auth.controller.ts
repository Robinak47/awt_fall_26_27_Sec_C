import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dtos/register.dto.js';
import { Users } from '../users/entities/users.entity.js';
import { LoginDto } from './dtos/login.dto.js';
import { JwtGuard } from './jwtGuard.guard.js';
import { Roles } from './roles/roles/roles.decorator.js';
import { RolesGuard } from './roles/roles/roles.guard.js';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('registration')
  async registration(@Body() user: RegisterDto): Promise<string> {
    return await this.authService.registration(user);
  }

  @Post('login')
  async login(@Body() login: LoginDto): Promise<string> {
    return await this.authService.login(login);
  }

  @Get('sayMyName')
  @UseGuards(RolesGuard)
  @Roles('faculty', 'admin')
  sayMyName(@Req() req: Request) {
    console.log(req.user);
    return 'Heigenburg';
  }

  @Get('me')
  @UseGuards(JwtGuard)
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
