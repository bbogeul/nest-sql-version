import { BaseEntity } from '../../core';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { STUDENT_ROLE } from 'src/shared';

@Entity('user_update_history')
export class UserHistory extends BaseEntity<UserHistory> {
  constructor(partial?: any) {
    super(partial);
  }
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id',
  })
  id: number;

  @Column('int', {
    nullable: false,
    unsigned: true,
    name: 'user_id',
    comment: '사용자 아이디',
  })
  userId: number;

  @Column('varchar', {
    nullable: false,
    name: 'first_name',
    length: 512,
    comment: '사용자 이름',
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
    name: 'last_name',
    length: 512,
    comment: '사용자 성',
  })
  lastName: string;

  @Column('json', {
    name: 'user_roles',
    nullable: false,
    comment: '유저 롤',
  })
  userRoles: STUDENT_ROLE[];
}
