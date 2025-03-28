import {
  IsEmail, IsNotEmpty, Matches, MaxLength, MinLength,
} from 'class-validator';

export default class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(60)
    email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, {
    message:
      'Invalid password !, must contain an uppercase letter, a lowercase letter, a number and a special character',
  })
    password: string;
}
