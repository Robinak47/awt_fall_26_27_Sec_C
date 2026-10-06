import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor() {}

  @Get()
  getAllPost(): any {
    return {
      id: '123u3',
    };
  }
}
