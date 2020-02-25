import { BaseEntity } from '../../core';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('student_withdraw_history')
export class UserWithdrawHistory extends BaseEntity<UserWithdrawHistory> {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id',
  })
  id: number;

  @Column('int', {
    name: 'user_id',
    nullable: false,
  })
  userId: number;

  @Column('varchar', {
    name: 'email',
    nullable: false,
    comment: '사용자 이메일',
  })
  email: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    comment: '등록일시',
  })
  created: Date;
}
