import { Expose } from 'class-transformer';
import { Entity, Column } from 'typeorm';
import { BaseUser } from '../auth/base-user.entity';
import { USER_ROLE } from '../../common';
import { UserType } from '../auth/types/role.type';
// import { USER_STATUS } from '../../shared';

@Entity('user')
export class User extends BaseUser {
  constructor(partial?: any) {
    super(partial);
  }

  @Column('json', {
    name: 'user_roles',
    default: () => [USER_ROLE.USER_APPROVED],
    nullable: false,
    comment: '유저 롤',
  })
  userRoles: USER_ROLE[];

  // no Database column - only used query
  @Expose()
  get userType(): UserType {
    return UserType.USER;
  }
}
