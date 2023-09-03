import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from './user.model';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  nickname: string;

  @Column({ type: 'varchar', length: 200 })
  provider: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  accessToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// 테이블에 대한 정의
// orm 데이터베이스 > 객체로 바꿈
// 객체로 만들어야하는 기준
