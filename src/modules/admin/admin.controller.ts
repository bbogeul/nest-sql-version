import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Delete,
  Put,
} from '@nestjs/common';
import { BaseController, AuthRolesGuard } from '../../core';
import { AdminCreateDto, AdminResetPasswordDto, AdminUpdateDto } from './dto';
import { AdminService } from './admin.service';
import { UserInfo, ADMIN_ROLE, CONST_ADMIN_ROLE } from '../../common';
import { Admin } from './admin.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import Debug from 'debug';
import { basename } from 'path';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);

@Controller()
@ApiTags('Admin', 'ADMIN')
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  /**
   * 관리자 생성
   * @param adminCreateDto
   */
  @Post('/admin')
  async create(@Body() adminCreateDto: AdminCreateDto) {
    debug();
    return await this.adminService.create(adminCreateDto);
  }

  /**
   * 관리자 마이 페이지
   * @param admin
   */
  @Get('/admin/my-page')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async findMe(@UserInfo() admin: Admin): Promise<Admin> {
    debug();
    console.log(admin);
    return await this.adminService.findOne(admin.id);
  }

  /**
   * 관리자 디테일
   * @param adminId
   */
  @Get('/admin/:id([0-9]+)')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async findOne(@Param('id') adminId: number): Promise<Admin> {
    debug();
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

  /**
   * 본인 계정 업데이트
   * @param adminId
   * @param adminUpdateDto
   */
  @Put('/admin')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async update(
    @UserInfo() adminId: number,
    @Body() adminUpdateDto: AdminUpdateDto,
  ): Promise<Admin> {
    debug();
    return await this.adminService.update(adminId, adminUpdateDto);
  }

  /**
   * 특정한 관리자 삭제
   * @param adminId
   */
  @Delete('/admin/:id([0-9]+)')
  @UseGuards(new AuthRolesGuard(ADMIN_ROLE.ADMIN_SUPER))
  async deleteOne(@Param('id') adminId: number) {
    return { isDeleted: await this.adminService.delete(adminId) };
  }

  /**
   * 본인 삭제
   * @param admin
   */
  @Delete('/admin/me')
  @UseGuards(new AuthRolesGuard(...CONST_ADMIN_ROLE))
  async delete(@UserInfo() admin: Admin) {
    return { isDeleted: await this.adminService.delete(admin.id) };
  }
}
