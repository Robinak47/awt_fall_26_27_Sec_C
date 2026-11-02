import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { RegisterDto } from './dtos/register.dto.js';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(user: RegisterDto): Promise<string> {
    const hashPass = await bcrypt.hash(user.password, 10);
    user.password = hashPass;
    return await this.usersService.createUser({ ...user });
  }

  async login(login: LoginDto): Promise<string> {
    try {
      const user = await this.usersService.getUserById(login.id);
      if (user != null && typeof user != 'string') {
        const matchPass = await bcrypt.compare(login.password, user.password);
        if (matchPass) {
          const payload = {
            id: user.id,
            email: user.email,
            role: user.role,
          };

          const access_token = this.jwtService.sign(payload);
          return access_token;
        } else {
          return 'incorrect password';
        }
      } else {
        return `user with id ${login.id} not found`;
      }
    } catch {
      throw new BadRequestException('Something went Wrong');
    }
  }
}
