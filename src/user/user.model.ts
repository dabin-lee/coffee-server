export interface IUser {
    id: number;
    email: string;
    nickname: string;
    provider: string;
    password: string;
    accessToken: string;
    createdAt: Date;
    updatedAt: Date;
}


// 유저 도메인에 사용되는 데이터 형태
// 유저 데이터 정의

/**
 * 유저 데이터 기준이 되는 정의
 * 붕어빵을 만드는 설계 도면
 */