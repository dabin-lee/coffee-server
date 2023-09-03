import { Injectable } from '@nestjs/common';
import { SignUpDto, LoginDto } from './auth.dto';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// const bcrypt = require('bcrypt');
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //user entity 가져오기 > repository 만들기
  async signUp(params: SignUpDto): Promise<User> {
    const hasUser = await this.userRepository.findOne({
      where: { email: params.email },
    });

    if (hasUser) throw 'EXISTS_USER';

    // salt: 랜덤 스트링 / 랜덤 스트링 회수 12번
    // const hash = bcrypt.hashSync(PW, salt);
    const hash = bcrypt.hashSync(params.password, 12);
    const newUser = await this.userRepository.create({
      ...params,
      password: hash,
      provider: 'EMAIL',
    });
    const saveUser = await this.userRepository.save(newUser);

    return saveUser;
  }

  // promise: 앞에 asycn가 붙어ㅓ 무조건 함수가 리턴하는 데이터 타입
  async userLogin(params: LoginDto): Promise<Partial<User>> {
    // 1. 일치하는 사용자 찾기
    const hasUser = await this.userRepository.findOne({
      where: { email: params.email },
    });

    // 2. hasuser랑 params.pw 비교
    const match = bcrypt.compareSync(params.password, hasUser.password);

    if (!match) throw 'INVALID_PASSWORD'; //유저 있음
    const { password, ...userInfoForClient } = hasUser;

    // act 만들기
    const accessToken = jwt.sign(userInfoForClient, 'COFFEE_MANGO_SECRET');
    return { ...userInfoForClient, accessToken };
  }
}
