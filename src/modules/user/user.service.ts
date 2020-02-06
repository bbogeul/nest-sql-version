import '../../core/typeorm/select-query-builder-declaration';
import Debug from 'debug';
import { basename } from 'path';
import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from '../../core';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './user.entity';
import { AdminUserListDto, UserCreateDto, UserUpdateDto } from './dto';
import { PaginatedRequest, PaginatedResponse, USER_ROLE } from 'src/common';
import { PasswordService } from '../auth/password.service';
import { UserHistory } from './user-history.entity';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);

@Injectable()
export class UserService extends BaseService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserHistory)
    private readonly userHistoryRepo: Repository<UserHistory>,
    private readonly passwordService: PasswordService,
  ) {
    super();
  }

  /**
   * find all users
   * @param adminUserListDto
   * @param pagination
   */
  async findAll(
    adminUserListDto: AdminUserListDto,
    pagination?: PaginatedRequest,
  ): Promise<PaginatedResponse<User>> {
    const qb = this.userRepo
      .createQueryBuilder()
      .WhereAndOrder(adminUserListDto)
      .Paginate(pagination);
    const [items, totalCount] = await qb.getManyAndCount();
    return { items, totalCount };
  }

  /**
   * find one user
   * @param userId
   */
  async findOne(userId: number): Promise<User> {
    return await this.userRepo.findOne(userId);
  }

  /**
   * create user
   * @param userCreateDto
   */
  async create(userCreateDto: UserCreateDto): Promise<User> {
    const user = await this.entityManager.transaction(async entityManager => {
      let user = new User(userCreateDto);
      user.password = await this.passwordService.hashPassword(
        userCreateDto.password,
      );
      user.userRoles = [USER_ROLE.USER_APPROVED];
      console.log('123123123');
      user = await entityManager.save(user);
      let userHistory = new UserHistory(user);
      console.log(userHistory);
      userHistory.userId = user.id;
      userHistory = await entityManager.save(userHistory.set(user));
      return user;
    });
    return user;
  }

  /**
   * update user and insert user history
   * @param userId
   * @param userUpdateDto
   */
  async updateUser(
    userId: number,
    userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    const user = await this.entityManager.transaction(async entityManager => {
      let user = await this.userRepo.findOne(userId);
      console.log(user);
      user = await entityManager.save(user.set(userUpdateDto));

      let userHistory = new UserHistory(user);
      userHistory.userId = userId;
      userHistory = await entityManager.save(userHistory);
      await this.userHistoryRepo.save(userUpdateDto);
      return user;
    });
    return user;
  }
}
