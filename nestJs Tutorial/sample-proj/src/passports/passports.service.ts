import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passports } from './entities/passports.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';
import { CreateUserDto } from '../users/dtos/create-user.dto.js';
import { CreatePassportDto } from './dtos/create-passport.dto.js';
import { Users } from '../users/entities/users.entity.js';

@Injectable()
export class PassportsService {
  constructor(
    @InjectRepository(Passports)
    private readonly passportRepo: Repository<Passports>,
    private readonly usersService: UsersService,
  ) {}

  async createPassport(
    passport: CreatePassportDto,
  ): Promise<Passports | string> {
    try {
      const usr = await this.usersService.getUserById(passport.userId);

      if (usr != null && typeof usr != 'string') {
        console.log('here');
        const pasp = await this.passportRepo.create({
          ...passport,
          user: usr as Users,
        });
        return await this.passportRepo.save(pasp);
      } else {
        return `user with id ${passport.userId} not found`;
      }
    } catch {
      throw new BadRequestException(' Passport Creation Failed');
    }
  }

  async getAllPassports(): Promise<Passports[]> {
    return this.passportRepo.find({
      //   relations: {
      //     user: true,
      //   },
    });
  }
}
