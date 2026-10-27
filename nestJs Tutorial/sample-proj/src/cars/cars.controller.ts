import { Controller, Body, Post } from '@nestjs/common';
import { CarsService } from './cars.service.js';
import { Cars } from './entities/cars.entity.js';
import { CreateCarDto } from './dtos/create-car.dto.js';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('create-car')
  async createCar(@Body() car: CreateCarDto): Promise<Cars | string> {
    return await this.carsService.createCar(car);
  }
}
