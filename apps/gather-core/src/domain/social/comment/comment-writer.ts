import { Injectable } from '@nestjs/common';
import {
  CommentEntity,
  CommentLikesEntity,
  CommentLikesRepository,
  CommentRepository,
} from '@gather/storage/social';

@Injectable()
export class CommentWriter {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentLikesRepository: CommentLikesRepository,
  ) {}

  async write(postId: number, userId: number, contents: string) {
    await this.commentRepository.save(
      new CommentEntity(postId, userId, contents),
    );
  }

  async update(commentId: number, contents: string) {
    await this.commentRepository.update(commentId, contents);
  }

  async saveLikes(commentId: number, userId: nmber) {
    this.commentLikesRepository.save(new CommentLikesEntity(commentId, userId));
  }
}
