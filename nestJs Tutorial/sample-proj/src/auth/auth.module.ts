import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { UsersModule } from '../users/users.module.js';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwtStrategy.strategy.js';
import { JwtGuard } from './jwtGuard.guard.js';
import { RolesGuard } from './roles/roles/roles.guard.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtGuard, RolesGuard],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'Meow-Meow',
      signOptions: {
        expiresIn: '1M',
      },
    }),
  ],
})
export class AuthModule {}
