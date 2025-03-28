import {
  Controller, Post, Body, UsePipes, ValidationPipe,
} from '@nestjs/common';
import AuthService from './auth.service';
import RegisterDto from './dtos/register.dto';
import LoginDto from './dtos/login.dto';
import { UserDocument } from '../schemas/users.schema';

@Controller('auth')
export default class AuthController {
  constructor(
    private readonly _authService: AuthService,
  ) { }

  @Post('register')
  @UsePipes(ValidationPipe)
  public async register(@Body() registerDto: RegisterDto): Promise<UserDocument> {
    return this._authService.register(registerDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  public async login(@Body() loginDto: LoginDto): Promise<string> {
    return this._authService.login(loginDto);
  }
}
