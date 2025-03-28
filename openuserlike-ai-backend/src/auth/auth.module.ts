import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import AuthController from './auth.controller';
import AuthService from './auth.service';
import UserRepository from '../repositories/users.repository';
import User, { UserSchema } from '../schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
        },
      ],
    ),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    JwtService,
  ],
})
export default class AuthModule { }
