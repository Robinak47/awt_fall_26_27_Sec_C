import { Module } from '@nestjs/common';
import { CarsService } from './cars.service.js';
import { CarsController } from './cars.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Cars]), UsersModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
