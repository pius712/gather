import { Injectable } from '@nestjs/common';
import { Post } from './post';

@Injectable()
export class PostReader {
  async read(id: number): Promise<Post> {}
}
