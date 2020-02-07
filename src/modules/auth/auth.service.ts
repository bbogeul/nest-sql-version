import {
  Injectable,
  NotImplementedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from '../user/user.entity';
import { PasswordService } from './password.service';
import { UserSigninPayload } from './types/user-signin-payload.type';
import { BaseService } from '../../core';
import { UserType } from './types/role.type';
import { ADMIN_STATUS, USER_STATUS, USER_ROLE } from '../../shared';
import { SigninDto } from './dto';
import { UserSigninHistory } from '../user/user-signin-history.entity';

@Injectable()
export class AuthService extends BaseService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserSigninHistory)
    private readonly: Repository<UserSigninHistory>,
  ) {
    super();
  }

  /**
   * user login
   * @param signinDto
   */
  async signin(signinDto: SigninDto): Promise<string> {
    const user = await this.userRepo.findOne({ email: signinDto.email });
    if (!user) {
      throw new BadRequestException('User not found!');
    }
    if (user.userRoles === [USER_ROLE.USER_NOT_APPROVED]) {
      throw new BadRequestException('User is not approved to use this site');
    }
    const passwordValid = await this.passwordService.validatePassword(
      signinDto.password,
      user.password,
    );
    if (!passwordValid) {
      throw new BadRequestException('Password does not match.');
    }
    // increase sign in count and last login
    // await this.userRepo.update(user.id, { signinCount: user.signinCount + 1 });
    await this.entityManager.transaction(async entityManager => {
      const newCount = user.signinCount + 1;
      user.signinCount = newCount;
      await entityManager.save(user);

      const signinHistory = new UserSigninHistory();
      signinHistory.userId = user.id;
      await entityManager.save(signinHistory);
    });
    return this.sign(user);
  }

  /**
   * validate buyer by id
   * @param userId
   */
  async validateUserById(userId: number): Promise<User> {
    return await this.userRepo.findOne(userId);
  }

  /**
   * sign to jwt payload
   * @param user
   * @param extend
   * @param rememberMe
   */
  async sign(user: User, extend?: any, rememberMe?: boolean) {
    const options = rememberMe
      ? { expiresIn: process.env.JWT_REMEMBER_EXPIRES_IN }
      : {};
    const userSigninInfo: UserSigninPayload = {
      userType: user.userType,
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userRoles: user.userRoles,
    };
    return this.jwtService.sign({ ...userSigninInfo, ...extend }, options);
  }
}
