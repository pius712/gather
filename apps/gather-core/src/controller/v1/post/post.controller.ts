import { Controller, Post } from '@nestjs/common';
import { PostService } from '../../../domain/post/post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  uploadPost(): string {
    return 'This action returns all cats';
  }

  @Post()
  updatePost() {}

  @Post()
  likePost() {}
}
