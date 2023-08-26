// command + option + t: ㄷㅏ른 탭 지움

// 통신할 때 validation check시 사용


import { IsNumberString, IsOptional, IsString, isNumberString } from "class-validator"
import { IBeverage } from "src/beverage/beverage.model"

export class BeverageCreatedDto implements Partial<IBeverage>{
    @IsString()
    name: string

    @IsString()
    type: string

    @IsString()
    @IsOptional()
    description?: string
}
export class BeverageUpdateDto implements Partial<IBeverage>{
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    type?: string

    @IsString()
    @IsOptional()
    description?: string
}

export class BeverageGetOneDto implements Partial<IBeverage>{
    // paramter는 무조건 스트링
    @IsNumberString()
    id: number
}

export class BeverageDeleteDto implements Partial<IBeverage>{
    // paramter는 무조건 스트링
    @IsNumberString()
    id: number
}