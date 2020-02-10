import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigService } from '../../config';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { User } from '../user/user.entity';
import { UserAuthController } from './user-auth.controller';
import { UserSigninHistory } from '../user/user-signin-history.entity';
import { Admin } from '../admin/admin.entity';
import { AdminAuthController } from './admin-auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    TypeOrmModule.forFeature([User, UserSigninHistory, Admin]),
  ],
  providers: [AuthService, PasswordService, JwtStrategy],
  controllers: [UserAuthController, AdminAuthController],
})
export class AuthModule {}
