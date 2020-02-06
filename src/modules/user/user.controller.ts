import { Controller, Post, Body, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserInfo } from '../../common';
import { BaseController } from '../../core';
import { UserService } from './user.service';
import { UserCreateDto } from './dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiTags('User', 'USER')
@ApiBearerAuth()
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

  /**
   * 본인 페이지 가져오기
   * @param user
   */
  @Get('/my-page')
  async findMe(@UserInfo() user: User): Promise<User> {
    return await this.userService.findOne(user.id);
  }
}
