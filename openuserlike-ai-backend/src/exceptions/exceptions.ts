/* eslint-disable max-classes-per-file */

import { BadRequestException, NotFoundException } from '@nestjs/common';

export class UserAlreadyExistsException extends BadRequestException {
  constructor(
    errorMsg = '',
    errorCode = 'BAD_REQUEST',
  ) {
    super({
      statusCode: 400,
      message: errorMsg,
      errorCode,
    });
  }
}

export class UserNotExistsException extends NotFoundException {
  constructor(
    errorMsg = '',
    errorCode = 'NOT_FOUND',
  ) {
    super({
      statusCode: 404,
      message: errorMsg,
      errorCode,
    });
  }
}

export class InvalidPasswordException extends BadRequestException {
  constructor(
    errorMsg = '',
    errorCode = 'INVALID_PASSWORD',
  ) {
    super({
      statusCode: 400,
      message: errorMsg,
      errorCode,
    });
  }
}
