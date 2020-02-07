import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { IsPassword } from 'src/common';

export class SigninDto {
  @ApiProperty()
  @IsEmail()
  @Expose()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsPassword()
  @IsNotEmpty()
  @Expose()
  password: string;
}
