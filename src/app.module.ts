import { BeverageService } from 'src/beverage/beverage.service';
import { BeverageController } from './beverage/beverage.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beverage } from 'src/beverage/beverage.entity';
import { UserModule } from './user/user.module';

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
      entities: [Beverage],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Beverage]),
    UserModule,
  ],
  controllers: [BeverageController, AppController],
  providers: [BeverageService, AppService],
})
export class AppModule { }
