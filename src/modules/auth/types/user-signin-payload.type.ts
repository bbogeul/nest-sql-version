import { UserType } from './role.type';
import { ADMIN_ROLE, USER_ROLE } from '../../../shared';

export interface UserSigninPayload {
  userType: UserType;
  userId: number;
  firstName: string;
  lastName: string;
  userRoles: (ADMIN_ROLE | USER_ROLE)[];
}

export interface UserTempSigninPayload {
  userType: UserType;
  userId: number;
  email: string;
  expiresIn: string;
}
