import { Expose } from 'class-transformer';
import { Entity, Column } from 'typeorm';
import { BaseUser } from '../auth/base-user.entity';
import { STUDENT_ROLE } from '../../common';
import { UserType } from '../auth/types/role.type';
// import { USER_STATUS } from '../../shared';

@Entity('user')
export class User extends BaseUser {
  constructor(partial?: any) {
    super(partial);
  }

  @Column('json', {
    name: 'user_roles',
    default: () => [STUDENT_ROLE.STUDENT_ROLE_APPROVED],
    nullable: false,
    comment: '유저 롤',
  })
  userRoles: STUDENT_ROLE[];

  // no Database column - only used query
  @Expose()
  get userType(): UserType {
    return UserType.USER;
  }
}
