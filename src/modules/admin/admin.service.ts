import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { BaseService } from '../../core';
import { AdminCreateDto, AdminUpdateDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService extends BaseService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
  ) {
    super();
  }

  /**
   * create new admin
   * @param adminCreateDto
   */
  async create(adminCreateDto: AdminCreateDto): Promise<Admin> {
    return await this.adminRepo.save(adminCreateDto);
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
