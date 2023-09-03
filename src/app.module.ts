import { BeverageService } from 'src/beverage/beverage.service';
import { BeverageController } from './beverage/beverage.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beverage } from 'src/beverage/beverage.entity';
import { User } from './user/user.entity';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

const entityList = [Beverage, User];

@Module({
  imports: [
    // 데이터베이스 접속 설정
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coffee-shop',
      entities: entityList,
      synchronize: false,
    }),
    TypeOrmModule.forFeature(entityList),
  ],
  controllers: [
    BeverageController,
    AppController,
    UserController,
    AuthController,
  ],
  providers: [BeverageService, AppService, UserService, AuthService],
})
export class AppModule {}
