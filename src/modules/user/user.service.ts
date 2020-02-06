import { Injectable } from '@nestjs/common';
import { BaseService } from '../../core';

@Injectable()
export class UserService extends BaseService {
  constructor() {
    super();
  }
}
