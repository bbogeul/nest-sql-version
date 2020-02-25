import Debug from 'debug';
import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { basename } from 'path';
import { ADMIN_ROLE, STUDENT_ROLE } from '../../common';
// import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);

@Injectable()
export class AuthRolesGuard extends AuthGuard('jwt') {
  // constructor(private readonly reflector: Reflector) {
  //   super();
  // }
  readonly roles: (ADMIN_ROLE | STUDENT_ROLE)[];

  constructor(...roles: (ADMIN_ROLE | STUDENT_ROLE)[]) {
    super();
    this.roles = roles;
  }

  // canActivate(
  //   context: ExecutionContext
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const req = context.switchToHttp().getRequest();
  //   return super.canActivate(new ExecutionContextHost([req]));
  // }

  handleRequest(err, user, info) {
    if (err || !user) {
      debug(info);
      console.log(info);
      throw err || new UnauthorizedException('something wrong');
    }

    if (this.roles.length) {
      const hasRole = () =>
        this.roles.some(role => user.userRoles.includes(role));
      if (!user.userRoles || !hasRole()) {
        throw new ForbiddenException('something wrong');
      }
    }
    return user;
  }
}
