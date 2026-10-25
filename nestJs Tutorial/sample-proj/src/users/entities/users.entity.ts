import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';
import { PrimaryColumn } from 'typeorm/browser';

@Entity('users')
export class Users {
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
  })
  id: string;
  @Column({
    name: 'userName',
    length: 100,
    type: 'varchar',
    nullable: true,
    default: 'meow',
  })
  name: string;
  @Column({
    name: 'userAge',
    type: 'int',
  })
  age: number;
  @Column({
    name: 'userGender',
    length: 10,
    type: 'varchar',
  })
  gender: string;
  @Column({
    name: 'userEmail',
    type: 'varchar',
    unique: true,
  })
  email: string;
  @Column({
    name: 'userAddress',
    type: 'varchar',
    length: 1000,
  })
  address: string;
  @Column()
  isBangladeshi: boolean;
  @Column({
    name: 'pass',
    type: 'varchar',
    length: 20,
  })
  password: string;

  @UpdateDateColumn()
  updateDate: Date;
  @CreateDateColumn()
  createDate: Date;
  @DeleteDateColumn()
  deleteDate: Date;
}
