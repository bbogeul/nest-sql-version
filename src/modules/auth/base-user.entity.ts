import { Expose, Exclude } from 'class-transformer';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ADMIN_ROLE, USER_ROLE } from '../../common';
import { UserType } from './types/role.type';
import { BaseEntity } from '../../core';

// Common entity for Admin, Buyer
export abstract class BaseUser extends BaseEntity<BaseUser> {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 512,
    unique: true,
    comment: '이메일',
  })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column('varchar', {
    nullable: false,
    length: 512,
    comment: '비밀번호',
  })
  password: string;

  @Exclude({ toPlainOnly: true })
  @Column('timestamp', {
    name: 'password_updated',
    nullable: true,
    comment: '비밀번호 수정일시',
  })
  passwordUpdated: Date;

  @Column('varchar', {
    nullable: false,
    length: 512,
    comment: '이름',
    name: 'first_name',
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
    length: 512,
    comment: '성',
    name: 'last_name',
  })
  lastName: string;

  // 필드 정의 및 데이터베이스 컬럼 정의는 Admin, Buyer 모델에서 정의한다.
  userRoles: (ADMIN_ROLE | USER_ROLE)[];

  @Column('int', {
    name: 'signin_count',
    nullable: false,
    unsigned: true,
    default: 0,
    comment: '로그인 카운트',
  })
  signinCount: number;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    comment: '등록일시',
  })
  created: Date;

  // no Database column - only used query
  get userType(): UserType {
    return UserType.USER;
  }
}
