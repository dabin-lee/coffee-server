/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beverage } from 'src/entity/beverage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BeverageService {
  constructor(
    @InjectRepository(Beverage)
    private beverageRepository: Repository<Beverage>,
  ) {}

  async getList(): Promise<Beverage[]> {
    const beverageList = await this.beverageRepository.find();
    return beverageList;
  }

  async getOne(id: number): Promise<Beverage> {
    const beverage = await this.beverageRepository.findOne({
      where: { id },
    });
    return beverage;
  }

  /**
   * Partial : 이렇게만 들어가도 가능
   * {name: 'latte'}
   * Partial없으면 에러
   */
  async create(params: Partial<Beverage>): Promise<Beverage> {
    // 데이터 생성
    const newBeverage = this.beverageRepository.create(params);

    // 데이터 베이스에 저장
    const saveRes = await this.beverageRepository.save(newBeverage);
    return saveRes;
  }
}