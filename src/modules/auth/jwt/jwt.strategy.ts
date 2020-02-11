import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserType } from '../types/role.type';
import { UserSigninPayload } from '../types/user-signin-payload.type';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * validate jwt token ~~ 되는지 안되는지 모르겠는데
   * @param payload
   */
  async validate(payload: UserSigninPayload): Promise<any> {
    let user;
    if (payload.userType === UserType.USER) {
      user = await this.authService.validateUserById(payload.userId);
    }
    if (payload.userType === UserType.ADMIN) {
      user = await this.authService.validateAdminById(payload.userId);
    }
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
