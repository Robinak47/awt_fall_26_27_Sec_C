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
} from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetParamDTO } from './dtos/GetParam.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage, memoryStorage } from 'multer';
import { promises as fs } from 'fs';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findUserById/:id')
  getUserWithId(@Param() params: GetParamDTO) {
    console.log(params.id, typeof params.id);
  }

  @Get('findUser')
  getUserByName(
    @Query('name', new DefaultValuePipe('Ronaldo')) name: any,
    @Query('isFootballer', ParseBoolPipe) isFootballer: boolean,
  ) {
    console.log(name);
    console.log(typeof name);
    console.log(isFootballer);
    console.log(typeof isFootballer);
  }

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.gender);
    console.log(user.age);
    console.log(user.email);
    console.log(user.address);
    console.log(user.isBangladeshi);
    console.log(user.password);

    return 'user created successfully';
  }

  @Patch('update-user/:id')
  updateUserPartially(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return `updated user Partially of Id ${id}`;
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

  @Get('download/download/propic-download')
  downloadFile(@Query('fileName') file: string, @Res() res: Response) {
    res.sendFile(file, { root: './uploads' });
  }
}
