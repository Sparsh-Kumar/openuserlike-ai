import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import User, { UserDocument } from '../schemas/users.schema';
import { LooseObject } from '../types';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly _userModel: Model<UserDocument>,
  ) { }

  public async findUserById(userId: string): Promise<UserDocument> {
    return this._userModel.findById(userId);
  }

  public async findOneUser(filter: LooseObject = {}): Promise<UserDocument> {
    return this._userModel.findOne(filter);
  }

  public async find(filter: LooseObject = {}): Promise<UserDocument[]> {
    return this._userModel.find(filter);
  }

  public async create(user: User): Promise<UserDocument> {
    return this._userModel.create(user);
  }
}
