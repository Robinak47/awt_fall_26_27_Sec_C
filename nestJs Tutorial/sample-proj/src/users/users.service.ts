import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepo: Repository<Users>,
  ) {}

  async createUser(user: CreateUserDto): Promise<string> {
    try {
      const usr = await this.userRepo.create(user);
      const u = await this.userRepo.save(usr);
      if (u != null) {
        return 'user Created Successfully';
      } else {
        return 'user creation failed';
      }
    } catch {
      throw new BadRequestException(
        'failed to create exception due to db error',
      );
    }
  }

  async getAllUser(): Promise<Users[]> {
    return await this.userRepo.find({
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        address: true,
        gender: true,
        isBangladeshi: true,
      },

      withDeleted: true,
    });
  }

  async getUserById(id: string): Promise<Users | string> {
    const user = await this.userRepo.findOne({
      where: {
        id: id,
      },

      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        address: true,
        gender: true,
        isBangladeshi: true,
      },
    });
    if (user) {
      return user;
    } else {
      return 'user not found';
    }
  }

  async deleteUser(id: string): Promise<string> {
    const res = (await this.userRepo.delete(id)).affected;
    if (res != null && res > 0) {
      return `user deleted successfullu id ${id}`;
    } else {
      return 'user not found';
    }
  }

  async deleteUserSoft(id: string): Promise<string> {
    const res = (await this.userRepo.softDelete(id)).affected;
    if (res != null && res > 0) {
      return `user deleted successfullu id ${id}`;
    } else {
      return 'user not found';
    }
  }

  async replaceUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Users | string> {
    const user = await this.getUserById(id);
    if (user) {
      const res = (await this.userRepo.update(id, updateUserDto)).affected;

      if (res != null && res > 0) {
        const u = await this.getUserById(id);
        return u;
      } else {
        return 'user not found';
      }
    } else {
      throw new BadRequestException('user not found');
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Users | string> {
    const user = await this.getUserById(id);
    if (user) {
      const res = (await this.userRepo.update(id, updateUserDto)).affected;

      if (res != null && res > 0) {
        const u = await this.getUserById(id);
        return u;
      } else {
        return 'user not found';
      }
    } else {
      throw new BadRequestException('user not found');
    }
  }
}
