import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { BaseService } from '../../core';
import { AdminCreateDto, AdminUpdateDto, AdminResetPasswordDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordService } from '../auth/password.service';
import { ADMIN_ROLE } from 'src/shared';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   * create new admin
   * @param adminCreateDto
   */
  async create(adminCreateDto: AdminCreateDto): Promise<Admin> {
    adminCreateDto.password = await this.passwordService.hashPassword(
      adminCreateDto.password,
    );
    const newAdmin = new Admin(adminCreateDto);
    newAdmin.userRoles = [ADMIN_ROLE.ADMIN_SUPER];
    return await this.adminRepo.save(newAdmin);
  }

  /**
   * 관라지 디테일
   * @param adminId
   */
  async findOne(adminId: number): Promise<Admin> {
    return await this.adminRepo.findOne(adminId);
  }

  /**
   * admin update their own info after they are logged in~~
   * @param adminId
   * @param adminUpdateDto
   */
  async update(
    adminId: number,
    adminUpdateDto: AdminUpdateDto,
  ): Promise<Admin> {
    await this.adminRepo.update(adminId, adminUpdateDto);
    return await this.adminRepo.findOne(adminId);
  }

  /**
   * reset password for admin
   * @param adminId
   * @param resetPasswordDto
   */
  async resetPassword(
    adminId: number,
    resetPasswordDto: AdminResetPasswordDto,
  ): Promise<boolean> {
    const newPassword = await this.passwordService.hashPassword(
      resetPasswordDto.password,
    );
    await this.adminRepo.update(adminId, {
      password: newPassword,
      passwordUpdated: new Date(),
    });
    return true;
  }

  /**
   * delete admin
   * @param adminId
   */
  async delete(adminId: number): Promise<boolean> {
    await this.adminRepo.delete(adminId);
    return true;
  }
}
