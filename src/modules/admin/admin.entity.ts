import { ADMIN_ROLE } from '../../shared';
import { Column, Entity } from 'typeorm';
import { BaseUser } from '../auth/base-user.entity';
import { Expose } from 'class-transformer';
import { UserType } from '../auth/types/role.type';

@Entity('admin')
export class Admin extends BaseUser {
  @Column('json', {
    name: 'user_roles',
    default: () => [ADMIN_ROLE.ADMIN_SUPER],
    nullable: false,
    comment: '관리자 롤',
  })
  adminRoles: ADMIN_ROLE[];

  @Expose()
  get userType(): UserType {
    return UserType.ADMIN;
  }
}
