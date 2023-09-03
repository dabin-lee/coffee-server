import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UserDeleteDto, UserGetOneDto, UserUpdateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // // auth에서 사용자 생성
  // create(@Body() createUserDto: UserCreatedDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UserGetOneDto) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UserDeleteDto) {
    return this.userService.remove(+id);
  }
}
