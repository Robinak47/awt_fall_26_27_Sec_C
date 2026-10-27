import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Users } from '../../users/entities/users.entity.js';

@Entity('passports')
export class Passports {
  @PrimaryColumn({
    type: 'varchar',
    length: 20,
  })
  passportNo: string;
  @Column({
    type: 'varchar',
    length: 100,
  })
  holderName: string;
  @Column({
    type: 'varchar',
    length: 20,
  })
  nationality: string;

  @OneToOne(() => Users, (user) => user.passport, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  user: Relation<Users>;
}
