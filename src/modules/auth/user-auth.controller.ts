import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseController } from 'src/core';
import { SigninDto } from './dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth', 'USER')
@ApiBearerAuth()
export class UserAuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }
  /**
   * 사용자 로그인
   * @param signinDto
   */
  @Post('/auth/signin')
  async signin(@Body() signinDto: SigninDto) {
    const token = await this.authService.signin(signinDto);
    return { token };
  }
}
