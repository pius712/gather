import { Injectable } from '@nestjs/common';

@Injectable()
export class PostReader {
  async read(): Promise<Post> {}
}
