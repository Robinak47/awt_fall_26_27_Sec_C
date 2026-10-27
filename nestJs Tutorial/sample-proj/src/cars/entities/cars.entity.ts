import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity.js';
import type { Relation } from 'typeorm';

@Entity('cars')
export class Cars {
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
  })
  regiNo: string;
  @Column({
    type: 'varchar',
    length: 10,
  })
  modelNo: string;
  @Column({
    type: 'varchar',
    length: 10,
  })
  manufacturer: string;

  @ManyToOne(() => Users, (user) => user.cars, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  user: Relation<Users>;
}
