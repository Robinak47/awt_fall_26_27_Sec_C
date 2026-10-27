import { Controller, Post, Body, Get } from '@nestjs/common';
import { PassportsService } from './passports.service.js';
import { CreatePassportDto } from './dtos/create-passport.dto.js';
import { Passports } from './entities/passports.entity.js';

@Controller('passports')
export class PassportsController {
  constructor(private readonly passportsService: PassportsService) {}

  @Post('create-passport')
  async createPassport(
    @Body() passport: CreatePassportDto,
  ): Promise<Passports | string> {
    return await this.passportsService.createPassport(passport);
  }

  @Get()
  async getAllPassports(): Promise<Passports[]> {
    return await this.passportsService.getAllPassports();
  }
}
