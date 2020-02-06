import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { BaseController } from '../../core';
import { UserService } from './user.service';
import { UserCreateDto } from './dto';

@Controller()
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  /**
   * create user
   * @param userCreateDto
   */
  @Post('/user')
  async create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return await this.userService.create(userCreateDto);
  }
}
