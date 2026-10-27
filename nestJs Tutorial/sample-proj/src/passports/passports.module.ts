import { Module } from '@nestjs/common';
import { PassportsService } from './passports.service.js';
import { PassportsController } from './passports.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passports } from './entities/passports.entity.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Passports]), UsersModule],
  controllers: [PassportsController],
  providers: [PassportsService],
})
export class PassportsModule {}
