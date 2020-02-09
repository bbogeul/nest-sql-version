import { BaseDto } from '../../../core';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { IsPassword, IsEqualTo } from 'src/common';

export class AdminCreateDto extends BaseDto<AdminCreateDto> {
  @ApiProperty()
  @IsEmail()
  @Expose()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsPassword()
  @Expose()
  password: string;

  @ApiProperty()
  @IsEqualTo('password')
  @Expose()
  passwordConfirm: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  lastName: string;
}
