import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import RegisterDto from './dtos/register.dto';
import LoginDto from './dtos/login.dto';
import UserRepository from '../repositories/users.repository';
import {
  UserAlreadyExistsException,
  UserNotExistsException,
  InvalidPasswordException,
} from '../exceptions';
import { UserDocument } from '../schemas/users.schema';

@Injectable()
export default class AuthService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _jwtService: JwtService,
  ) { }

  public async register(registerDto: RegisterDto): Promise<UserDocument> {
    const {
      email = '',
      password = '',
    } = registerDto;

    const userWithEmailExists = await this._userRepository.findOneUser(
      {
        email,
      },
    );

    if (userWithEmailExists) throw new UserAlreadyExistsException(`User with email '${email}' already exists.`);

    /**
     * TODO:
     * - User information should be pushed into Rabbit MQ.
     * - The consumers will fetch the information from Rabbit MQ
     * - After fetching the information, they will create a link with jwt token to activate the
     * account and send it to user email.
     * - There should be another route in /auth controller, which will take that jwt token and
     * if user exists, then activate the account.
    */

    return this._userRepository.create(
      {
        email,
        password,
      },
    );
  }

  public async login(loginDto: LoginDto): Promise<string> {
    const {
      email = '',
      password = '',
    } = loginDto;

    const userExists = await this._userRepository.findOneUser(
      {
        email,
      },
    );

    if (!userExists) throw new UserNotExistsException(`User with email '${email}' does not exist.`);

    const {
      password: userPassword = '',
      salt = '',
    } = userExists;

    const hashedPassword = await bcrypt.hash(password, salt);
    const isPasswordValid = (hashedPassword === userPassword);

    if (!isPasswordValid) throw new InvalidPasswordException('Email/Password combination is incorrect.');

    /**
     * TODO : Add a check, if 'active' is false in user document,
     * then throw user inactive exception.
     */
    const accessToken: string = this._jwtService.sign(
      {
        _id: userExists?._id,
      },
      {
        secret: process.env.AUTH_TOKEN_SECRET,
        expiresIn: process.env.AUTH_TOKEN_EXPIRE,
      },
    );

    return accessToken;
  }
}
