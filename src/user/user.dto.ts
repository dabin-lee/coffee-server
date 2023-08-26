// client > server로 검증할 때 사용 (주러 컨트롤러에서 사용)
// 통신할 때 validation check시 사용


// 데코레이터
import { IsNumberString, IsOptional, IsString } from "class-validator"
import { IUser } from "./user.model"


// Partial: interface의 일부분도 허용 / 없을 경우 빨간줄


export class UserCreatedDto implements Partial<IUser>{
    @IsString()
    email: string

    @IsString()
    nickname: string

    @IsString()
    password: string

}

export class UserUpdateDto implements Partial<IUser>{
    @IsString()
    @IsOptional()
    nickname: string
    // password는 따로 처리
}

export class UserGetOneDto implements Partial<IUser>{
    @IsNumberString()
    id: number
}

export class UserDeleteDto implements Partial<IUser>{
    // paramter는 무조건 스트링
    @IsNumberString()
    id: number
}