import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { BaseController, AuthRolesGuard } from 'src/core';
import { AdminCreateDto, AdminResetPasswordDto } from './dto';
import { AdminService } from './admin.service';
import { UserInfo, ADMIN_ROLE, CONST_ADMIN_ROLE } from 'src/common';
import { Admin } from './admin.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiBearerAuth()
@ApiTags('Admin', 'ADMIN')
export class AdminController extends BaseController {
  constructor(private readonly adminService: AdminService) {
    super();
  }

  /**
   * 관리자 생성
   * @param adminCreateDto
   */
  @Post('/admin')
  async create(@Body() adminCreateDto: AdminCreateDto) {
    return await this.adminService.create(adminCreateDto);
  }

  /**
   * 관리자 마이 페이지
   * @param admin
   */
  @Get('/admin/my-page')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async findMe(@UserInfo() admin: Admin): Promise<Admin> {
    return await this.adminService.findOne(admin.id);
  }

  /**
   * 관리자 디테일
   * @param adminId
   */
  @Get('/admin/:id([0-9]+)')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async findOne(@Param(':id') adminId: number): Promise<Admin> {
    return await this.adminService.findOne(adminId);
  }

  /**
   * Reset user password
   * @param admin
   * @param adminResetPasswordDto
   */
  @Post('/admin/reset-password')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async resetPassword(
    @UserInfo() admin: Admin,
    @Body() adminResetPasswordDto: AdminResetPasswordDto,
  ) {
    return {
      isResetted: await this.adminService.resetPassword(
        admin.id,
        adminResetPasswordDto,
      ),
    };
  }
}
