import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  BadRequestException,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserInfo, USER_ROLE } from '../../common';
import { BaseController } from '../../core';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto, UserResetPasswordDto } from './dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthRolesGuard } from '../../core';

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
  @UseGuards(new AuthRolesGuard(USER_ROLE.USER_APPROVED))
  async findMe(@UserInfo() user: User): Promise<User> {
    return await this.userService.findOne(user.id);
  }

  /**
   * update user information
   * @param user
   * @param userUpdateDto
   */
  @Put('/user')
  @UseGuards(new AuthRolesGuard(USER_ROLE.USER_APPROVED))
  async update(
    @UserInfo() user: User,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    console.log(user);
    if (!user) throw new BadRequestException();
    return await this.userService.updateUser(user.id, userUpdateDto);
  }

  /**
   * 회원 탈퇴
   * @param user
   */
  @Delete('/user')
  @UseGuards(new AuthRolesGuard(USER_ROLE.USER_APPROVED))
  async delete(@UserInfo() user: User): Promise<User> {
    console.log(user);
    return await this.userService.delete(user.id);
  }

  /**
   * reset user password ~~~~
   * @param user
   * @param userResetPasswordDto
   */
  @Post('/user/reset-password')
  @UseGuards(new AuthRolesGuard(USER_ROLE.USER_APPROVED))
  async resetPassword(
    @UserInfo() user: User,
    @Body() userResetPasswordDto: UserResetPasswordDto,
  ) {
    return {
      isResetted: await this.userService.resetPassword(
        user.id,
        userResetPasswordDto,
      ),
    };
  }
}
