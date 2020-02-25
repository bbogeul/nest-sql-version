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
import { UserInfo, STUDENT_ROLE } from '../../common';
import { BaseController } from '../../core';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto, UserResetPasswordDto } from './dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthRolesGuard } from '../../core';

@Controller()
@ApiTags('Student', 'STUDENT')
@ApiBearerAuth()
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  /**
   * create user
   * @param userCreateDto
   */
  @Post('/student')
  async create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return await this.userService.create(userCreateDto);
  }

  /**
   * 본인 페이지 가져오기
   * @param user
   */
  @Get('/my-page')
  @UseGuards(new AuthRolesGuard(STUDENT_ROLE.STUDENT_ROLE_APPROVED))
  async findMe(@UserInfo() user: User): Promise<User> {
    return await this.userService.findOne(user.id);
  }

  /**
   * update user information
   * @param user
   * @param userUpdateDto
   */
  @Put('/student')
  @UseGuards(new AuthRolesGuard(STUDENT_ROLE.STUDENT_ROLE_APPROVED))
  async update(
    @UserInfo() user: User,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    return await this.userService.updateUser(user.id, userUpdateDto);
  }

  /**
   * 회원 탈퇴
   * @param user
   */
  @Delete('/student')
  @UseGuards(new AuthRolesGuard(STUDENT_ROLE.STUDENT_ROLE_APPROVED))
  async delete(@UserInfo() user: User): Promise<User> {
    return await this.userService.delete(user.id);
  }

  /**
   * reset user password ~~~~
   * @param user
   * @param userResetPasswordDto
   */
  @Post('/student/reset-password')
  @UseGuards(new AuthRolesGuard(STUDENT_ROLE.STUDENT_ROLE_APPROVED))
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
