import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { UsersModule } from '../users/users.module.js';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwtStrategy.strategy.js';
import { JwtGuard } from './jwtGuard.guard.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtGuard],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'Meow-Meow',
      signOptions: {
        expiresIn: '1H',
      },
    }),
  ],
})
export class AuthModule {}
