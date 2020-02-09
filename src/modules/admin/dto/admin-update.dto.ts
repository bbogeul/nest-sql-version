import { BaseDto } from '../../../core';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class AdminUpdateDto extends BaseDto<AdminUpdateDto> {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  lastName: string;
}
