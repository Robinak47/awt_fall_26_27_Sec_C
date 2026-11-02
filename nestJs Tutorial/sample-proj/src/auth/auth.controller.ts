import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dtos/register.dto.js';
import { Users } from '../users/entities/users.entity.js';
import { LoginDto } from './dtos/login.dto.js';
import { JwtGuard } from './jwtGuard.guard.js';

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
  @UseGuards(JwtGuard)
  sayMyName() {
    return 'Heigenburg';
  }
}
