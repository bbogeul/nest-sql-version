import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PRIVACY_POLICY_CATEGORY } from 'src/shared';

@Entity('privacy-policy')
export class PrivacyPolicy extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    comment: '아이디',
  })
  id: number;

  @Column('json', {
    nullable: false,
    name: 'category',
    comment: '카테고리',
  })
  category: PRIVACY_POLICY_CATEGORY[];

  @Column('int', {
    name: 'parent_id',
    nullable: true,
  })
  parentId?: number;

  @Column('int', {
    name: 'depth',
    nullable: true,
  })
  depth?: number;

  @Column('int', {
    name: 'admin_id',
    nullable: false,
  })
  adminId: number;

  @Column('varchar', {
    name: 'header',
    nullable: true,
  })
  header?: string;

  @Column('varchar', {
    name: 'content',
    nullable: true,
  })
  content?: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    comment: '등록일시',
  })
  created: Date;

  @Column('timestamp', {
    nullable: true,
    comment: '수정일시',
  })
  updated?: Date;

  @Column('timestamp', {
    nullable: true,
    comment: '삭제일시',
  })
  deleted?: Date;
}
