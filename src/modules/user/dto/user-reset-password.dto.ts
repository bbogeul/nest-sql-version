import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsPassword, IsEqualTo } from 'src/common';

export class UserResetPasswordDto {
  @ApiProperty()
  @Expose()
  @IsPassword()
  password: string;

  @ApiProperty()
  @Expose()
  @IsPassword()
  @IsEqualTo('password')
  passwordConfirm: string;
}
