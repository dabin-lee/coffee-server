import { Body, Controller, Param, Post } from '@nestjs/common';
import { LoginDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() createAuthDto: SignUpDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post('login-user')
  loginUser(@Body() params: LoginDto) {
    return this.authService.userLogin(params);
  }
}
