import { User } from '../user/user.entity';
import { ADMIN_ROLE } from '../../shared';
import { Column, Entity } from 'typeorm';

@Entity('admin')
export class Admin extends User {
  @Column('json', {
    name: 'user_roles',
    default: () => [ADMIN_ROLE.ADMIN_SUPER],
    nullable: false,
    comment: '유저 롤',
  })
  adminRoles: ADMIN_ROLE[];
}
