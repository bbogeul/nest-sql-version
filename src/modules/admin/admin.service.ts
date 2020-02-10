import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { BaseService } from '../../core';
import { AdminCreateDto, AdminUpdateDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
  ) {}

  /**
   * create new admin
   * @param adminCreateDto
   */
  async create(adminCreateDto: AdminCreateDto): Promise<Admin> {
    return await this.adminRepo.save(adminCreateDto);
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
}
