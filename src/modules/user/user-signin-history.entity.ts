import { BaseEntity } from '../../core';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_signin_history')
export class UserSigninHistory extends BaseEntity<UserSigninHistory> {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id',
  })
  id: number;

  @Column('int', {
    name: 'user_id',
    nullable: false,
    comment: '사용자 아이디',
  })
  userId: number;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    comment: '등록일시',
  })
  created: Date;
}
