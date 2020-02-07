import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { BaseController, AuthRolesGuard } from '../../core';
import { UserInfo, CONST_ADMIN_ROLE } from '../../common';
import { PaginatedRequest, PaginatedResponse } from '../../common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AdminUserListDto } from './dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
@ApiTags('User', 'ADMIN')
@ApiBearerAuth()
// for testing
@UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
export class AdminUserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  /**
   * find all users
   * @param adminUserListDto
   * @param pagination
   */
  @Get('/admin/user')
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
  @Get('/admin/user/:id([0-9]+)')
  async findOne(@Param('id') userId: number): Promise<User> {
    return await this.userService.findOne(userId);
  }
}
