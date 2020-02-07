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

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, PasswordService, JwtStrategy],
  controllers: [UserAuthController],
})
export class AuthModule {}
