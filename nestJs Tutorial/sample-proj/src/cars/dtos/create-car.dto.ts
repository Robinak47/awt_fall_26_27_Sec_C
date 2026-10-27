import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  regiNo: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  modelNo: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  manufacturer: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  userId: string;
}
