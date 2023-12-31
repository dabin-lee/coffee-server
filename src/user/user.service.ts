import { Injectable } from '@nestjs/common';
import { UserCreatedDto, UserUpdateDto } from './user.dto';

@Injectable()
export class UserService {
  // 매개변수에 대한 데이터 타입
  create(params: UserCreatedDto) {
    console.log('params: ', params);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, params: UserUpdateDto) {
    console.log('params: ', params);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
