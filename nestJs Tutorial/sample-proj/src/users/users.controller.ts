import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
  Post,
  Body,
  Patch,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFiles,
  Res,
  Delete,
  Put,
} from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetParamDTO } from './dtos/GetParam.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage, memoryStorage } from 'multer';
import { promises as fs } from 'fs';
import { Users } from './entities/users.entity.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('findUser')
  // getUserByName(
  //   @Query('name', new DefaultValuePipe('Ronaldo')) name: any,
  //   @Query('isFootballer', ParseBoolPipe) isFootballer: boolean,
  // ) {
  //   console.log(name);
  //   console.log(typeof name);
  //   console.log(isFootballer);
  //   console.log(typeof isFootballer);
  // }

  @Get('getAllUsers')
  async getAllUser(): Promise<Users[]> {
    return await this.usersService.getAllUser();
  }

  @Get('findUserById/:id')
  async getUserWithId(@Param('id') id: string): Promise<Users | string> {
    return await this.usersService.getUserById(id);
  }

  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return await this.usersService.deleteUser(id);
  }

  @Delete('deleteUser/softDelete/:id')
  async deleteUserSoft(@Param('id') id: string): Promise<string> {
    return await this.usersService.deleteUserSoft(id);
  }

  @Post('create-user')
  async createUser(@Body() user: CreateUserDto): Promise<string> {
    return await this.usersService.createUser(user);
  }

  @Put('replaceUser/:id')
  async replaceUser(
    @Body() user: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<Users | string> {
    return this.usersService.replaceUser(id, user);
  }

  @Patch('update-user/:id')
  async updateUserPartially(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<Users | string> {
    return this.usersService.updateUser(id, user);
  }

  @Post('profile-Picture')
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     const name = Date.now() + file.originalname;
      //     cb(null, name);
      //   },
      // }),

      storage: memoryStorage(),
    }),
  )
  async uploadProfilePic(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 2,
          }),

          new FileTypeValidator({
            fileType: /image\/jpeg/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const name = Date.now() + file.originalname;
    const destination = './uploads';
    const finalDestination = `${destination}/${name}`;
    await fs.writeFile(finalDestination, file.buffer);
    console.log(file.originalname);
    console.log(file.size);
    console.log(file.mimetype);
  }

  // @Get('download/download/propic-download')
  // downloadFile(@Query('fileName') file: string, @Res() res: Response) {
  //   res.sendFile(file, { root: './uploads' });
  // }
}
