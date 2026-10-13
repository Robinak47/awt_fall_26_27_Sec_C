import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  MaxLength,
  MinLength,
  IsEAN,
  IsEmail,
  IsBoolean,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  name: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(90)
  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(10)
  gender: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  address: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsBoolean()
  @IsNotEmpty()
  isBangladeshi: boolean;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    {
      message:
        'Password should have at least one special char, one number, one uppercase letter, one lowercase letter and between 8 -20 char length',
    },
  )
  password: string;
}
