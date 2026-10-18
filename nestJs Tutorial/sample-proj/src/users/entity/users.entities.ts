import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    name: 'userName',
    default: 'meow',
    unique: true,
    nullable: true,
    length: 30,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'userEmail',
    unique: true,
    nullable: false,
  })
  email: string;
  @Column()
  password: string;

  @UpdateDateColumn()
  updateDate: Date;
  @CreateDateColumn()
  createDate: Date;
}
