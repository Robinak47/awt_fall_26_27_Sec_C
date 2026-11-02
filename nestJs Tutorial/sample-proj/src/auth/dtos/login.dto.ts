import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    {
      message:
        'Password should have at least one special char, one number, one uppercase letter, one lowercase letter and between 8 -20 char length',
    },
  )
  password: string;
}
