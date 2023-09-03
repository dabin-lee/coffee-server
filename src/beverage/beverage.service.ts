/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BeverageCreatedDto } from 'src/beverage/beverage.dto';
import { Beverage } from 'src/beverage/beverage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BeverageService {
  constructor(
    // entity를 리포지토리로 만듬
    @InjectRepository(Beverage)
    private beverageRepository: Repository<Beverage>,
  ) {}

  async getList(): Promise<Beverage[]> {
    const beverageList = await this.beverageRepository.find();
    return beverageList;
  }

  async getOne(id: number): Promise<Beverage> {
    const beverage = await this.beverageRepository.findOne({
      where: { id: id },
    });
    return beverage;
  }

  /**
   * Partial : 이렇게만 들어가도 가능
   * {name: 'latte'}
   * Partial없으면 에러
   */
  async create(params: BeverageCreatedDto): Promise<Beverage> {
    // 데이터 생성
    const newBeverage = this.beverageRepository.create(params);

    // 데이터 베이스에 저장
    const saveRes = await this.beverageRepository.save(newBeverage);
    return saveRes;
  }
}
