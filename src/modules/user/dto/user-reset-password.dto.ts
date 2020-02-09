import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { IsPassword } from 'src/common';

export class UserResetPasswordDto {
  @ApiProperty()
  @Expose()
  @IsPassword()
  password: string;
}
