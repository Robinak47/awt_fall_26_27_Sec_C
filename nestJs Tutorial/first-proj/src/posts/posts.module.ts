import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller.js';
import { PostsService } from './posts.service.js';

@Module({
  controllers: [PostsController],
  imports: [],
  exports: [],
  providers: [PostsService],
})
export class PostsModule {}
