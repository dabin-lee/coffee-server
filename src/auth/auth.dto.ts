// 회원가입 목록
import { IsString } from 'class-validator';
import { IUser } from '../user/user.model';

export class SignUpDto implements Partial<IUser> {
  @IsString()
  email: string;

  @IsString()
  nickname: string;

  @IsString()
  password: string;
}

export class LoginDto implements Partial<IUser> {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
