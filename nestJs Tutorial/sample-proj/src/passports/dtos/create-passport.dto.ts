import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePassportDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(14)
  @MaxLength(20)
  passportNo: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  holderName: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  nationality: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  userId: string;
}
