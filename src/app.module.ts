import { BeverageService } from './api/beverage/beverage.service';
import { BeverageController } from './api/beverage/beverage.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beverage } from './entity/beverage.entity';

@Module({
  imports: [
    // 데이터베이스 접속 설정
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'coffeeshopdb',
      entities: [Beverage],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Beverage]),
  ],
  controllers: [BeverageController, AppController],
  providers: [BeverageService, AppService],
})
export class AppModule {}
