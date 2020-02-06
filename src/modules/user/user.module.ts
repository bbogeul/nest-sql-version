import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  exports: [],
  providers: [UserService],
})
export class UserModule {}
