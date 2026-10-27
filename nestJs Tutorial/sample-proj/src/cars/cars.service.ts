import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';
import { CreateCarDto } from './dtos/create-car.dto.js';
import { Users } from '../users/entities/users.entity.js';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars) private readonly carsRepo: Repository<Cars>,
    private readonly usersService: UsersService,
  ) {}

  async createCar(car: CreateCarDto): Promise<Cars | string> {
    try {
      const usr = await this.usersService.getUserById(car.userId);

      if (usr != null && typeof usr != 'string') {
        const carObj = await this.carsRepo.create({
          ...car,
          user: usr as Users,
        });
        return await this.carsRepo.save(carObj);
      } else {
        return `user with id ${car.userId} not found`;
      }
    } catch {
      throw new BadRequestException('car cration failed');
    }
  }
}
