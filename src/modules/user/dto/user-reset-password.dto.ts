import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsPassword } from 'src/common';

export class UserResetPasswordDto {
  @ApiProperty()
  @Expose()
  @IsPassword()
  password: string;
}
