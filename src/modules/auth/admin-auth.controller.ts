import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseController } from 'src/core';
import { SigninDto } from './dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth', 'ADMIN')
@ApiBearerAuth()
export class AdminAuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }
  /**
   * 관리자 로그인
   * @param signinDto
   */
  @Post('/admin/auth/signin')
  async signin(@Body() signinDto: SigninDto) {
    const token = await this.authService.signinAdmin(signinDto);
    return { token };
  }
}
