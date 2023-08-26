/*
https://docs.nestjs.com/controllers#controllers
*/

import { Beverage } from 'src/beverage/beverage.entity';
import { BeverageService } from 'src/beverage/beverage.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BeverageCreatedDto, BeverageGetOneDto } from 'src/beverage/beverage.dto';

@Controller('beverage')
export class BeverageController {
  constructor(
    // service 가져오기
    private beverageService: BeverageService,
  ) { }

  @Get()
  async getList(): Promise<Beverage[]> {
    const beverageList = await this.beverageService.getList();
    return beverageList;

  }

  @Get(':id')
  async getOne(
    //id값만 사용할 수 있음
    @Param('id') id: BeverageGetOneDto,
    // 아무것도 없이 사용: object 전체가 옴
    // @Param() params: any,
  ): Promise<Beverage> {
    // console.log('params: ', params);
    const beverage = await this.beverageService.getOne(Number(id));
    return beverage;
  }

  @Post()
  async create(@Body() body: BeverageCreatedDto): Promise<Beverage> {
    const beverage = await this.beverageService.create(body);
    return beverage;
  }
}
