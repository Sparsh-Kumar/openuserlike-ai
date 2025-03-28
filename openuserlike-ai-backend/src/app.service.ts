import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  private readonly msg: string = 'Hello World !';

  public getHello(): string {
    return this.msg;
  }
}
