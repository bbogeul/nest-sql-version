import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { AdminUserController } from './admin-user.controller';
import { UserService } from './user.service';
import { PasswordService } from '../auth/password.service';
import { UserHistory } from './user-history.entity';
import { UserSigninHistory } from './user-signin-history.entity';
import { UserWithdrawHistory } from './user-withdraw-history.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserHistory,
      UserSigninHistory,
      UserWithdrawHistory,
    ]),
  ],
  controllers: [UserController, AdminUserController],
  providers: [UserService, PasswordService],
})
export class UserModule {}
