import {
  Controller,
  Get,
  Query,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { BaseController, AuthRolesGuard } from '../../core';
import { ADMIN_ROLE } from '../../common';
import { PaginatedRequest, PaginatedResponse } from '../../common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AdminUserListDto } from './dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserSigninHistory } from './user-signin-history.entity';

@Controller()
@ApiTags('Student', 'ADMIN')
@ApiBearerAuth()
// for testing
@UseGuards(new AuthRolesGuard(ADMIN_ROLE.ADMIN_SUPER))
export class AdminUserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  /**
   * find all users
   * @param adminUserListDto
   * @param pagination
   */
  @Get('/admin/student')
  async findAll(
    @Query() adminUserListDto: AdminUserListDto,
    @Query() pagination: PaginatedRequest,
  ): Promise<PaginatedResponse<User>> {
    return await this.userService.findAll(adminUserListDto, pagination);
  }

  /**
   * find one user
   * @param userId
   */
  @Get('/admin/student/:id([0-9]+)')
  async findOne(@Param('id') userId: number): Promise<User> {
    return await this.userService.findOne(userId);
  }

  /**
   * get a user's signin log
   * @param userId
   * @param pagination
   */
  @Get('/admin/student/:id([0-9]+)/signin-history')
  async findSigninHistory(
    @Param('id') userId: number,
    @Query() pagination: PaginatedRequest,
  ): Promise<PaginatedResponse<UserSigninHistory>> {
    return await this.userService.findSigninHistory(userId, pagination);
  }

  /**
   * 관리자가 회원 강제 삭제
   * @param userId
   */
  @Delete('/admin/student/:id([0-9]+)')
  async deleteOne(@Param('id') userId: number): Promise<User> {
    return await this.userService.delete(userId);
  }
}
