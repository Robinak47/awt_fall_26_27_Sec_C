import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { PrimaryColumn } from 'typeorm/browser';
import { Passports } from '../../passports/entities/passports.entity.js';
import type { Relation } from 'typeorm';
import { Cars } from '../../cars/entities/cars.entity.js';

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

  @OneToOne(() => Passports, (passport) => passport.user)
  passport: Relation<Passports>;

  @OneToMany(() => Cars, (cars) => cars.user)
  cars: Relation<Cars>[];
  @UpdateDateColumn()
  updateDate: Date;
  @CreateDateColumn()
  createDate: Date;
  @DeleteDateColumn()
  deleteDate: Date;
}
