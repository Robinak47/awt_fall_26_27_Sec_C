import { PartialType } from '@nestjs/mapped-types';
import { CreatePassportDto } from './create-passport.dto.js';

export class UpdatePassportDto extends PartialType(CreatePassportDto) {}
