/*
https://docs.nestjs.com/controllers#controllers
*/

import { Beverage } from 'src/entity/beverage.entity';
import { BeverageService } from './beverage.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('beverage')
export class BeverageController {
  constructor(
    // service 가져오기
    private beverageService: BeverageService,
  ) {}

  @Get()
  async getList(): Promise<Beverage[]> {
    const beverageList = await this.beverageService.getList();
    return beverageList;
  }

  @Get(':id')
  async getOne(
    //id값만 사용할 수 있음
    @Param('id') id: string,
    // 아무것도 없이 사용: object 전체가 옴
    // @Param() params: any,
  ): Promise<Beverage> {
    // console.log('params: ', params);
    const beverage = await this.beverageService.getOne(Number(id));
    return beverage;
  }

  @Post()
  async create(@Body() body: any): Promise<Beverage> {
    const beverage = await this.beverageService.create(body);
    return beverage;
  }
}
