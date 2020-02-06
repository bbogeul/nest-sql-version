import { BaseDto } from 'src/core';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEmail, IsEnum } from 'class-validator';
import { Default, ORDER_BY_VALUE } from '../../../common';
import { Expose } from 'class-transformer';

export class AdminUserListDto extends BaseDto<AdminUserListDto> {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  @Expose()
  email?: string;

  @ApiPropertyOptional({ enum: ORDER_BY_VALUE })
  @Default(ORDER_BY_VALUE.DESC)
  @IsEnum(ORDER_BY_VALUE)
  @Expose()
  id?: ORDER_BY_VALUE;
}
