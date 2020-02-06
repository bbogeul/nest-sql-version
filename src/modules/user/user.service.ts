import '../../core/typeorm/select-query-builder-declaration';
import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from '../../core';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './user.entity';
import { AdminUserListDto, UserCreateDto } from './dto';
import { PaginatedRequest, PaginatedResponse, USER_ROLE } from 'src/common';
import { PasswordService } from '../auth/password.service';
import { UserHistory } from './user-history.entity';

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
      let newUser = new User(userCreateDto);
      newUser.password = await this.passwordService.hashPassword(
        userCreateDto.password,
      );
      newUser.userRoles = [USER_ROLE.USER_APPROVED];
      newUser = await entityManager.save(newUser);
      let userHistory = new UserHistory(newUser);
      userHistory.userId = newUser.id;
      userHistory = await entityManager.save(userHistory);
      return user;
    });
    return user;
  }
}
