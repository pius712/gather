import { Injectable } from '@nestjs/common';
import { PostReader } from './post.reader';
import { PostWriter } from './post.writer';
import { PostCreateRequest } from './post-create-request';

@Injectable()
export class PostService {
  constructor(
    private readonly postReader: PostReader,
    private readonly postWriter: PostWriter,
  ) {}

  async getPost(id: number) {
    return await this.postReader.read(id);
  }

  async writePost(postCreateRequest: PostCreateRequest) {
    return this.postWriter.write();
  }

  async likePost(userId: string, postId: string) {}
}
