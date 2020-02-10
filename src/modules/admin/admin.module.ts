import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { PasswordService } from '../auth/password.service';
import { UserService } from '../user/user.service';
import { AdminController } from './admin.controller';
import { User } from '../user/user.entity';
import { UserHistory } from '../user/user-history.entity';
import { UserSigninHistory } from '../user/user-signin-history.entity';
import { UserWithdrawHistory } from '../user/user-withdraw-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin,
      User,
      UserHistory,
      UserSigninHistory,
      UserWithdrawHistory,
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService, PasswordService, UserService],
  exports: [],
})
export class AdminModule {}
