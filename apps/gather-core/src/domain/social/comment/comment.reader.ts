import { Injectable } from '@nestjs/common';
import { Comment } from './comment';
import {
  CommentEntity,
  CommentLikesRepository,
  CommentRepository,
} from '@gather/storage/social';
import { LikeUser } from './like-user';

@Injectable()
export class CommentReader {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentLikesRepository: CommentLikesRepository,
  ) {}

  async readById(id: number): Promise<Comment> {
    const commentEntity = await this.commentRepository.findById(id);
    return this.toComment(commentEntity);
  }

  async readByPostId(postId: number): Promise<Comment[]> {
    const commentEntity = await this.commentRepository.findByPostId(postId);
    return commentEntity.map(this.toComment);
  }

  async readByUserId(userId: number): Promise<Comment[]> {
    const commentEntity = await this.commentRepository.findByUserId(userId);
    return commentEntity.map(this.toComment);
  }

  async readLikesByCommentId(commentId: number): Promise<LikeUser[]> {
    const commentLikesEntities =
      await this.commentLikesRepository.findByCommentId(commentId);
  }

  async readCommentLikedByUserId(userId: number): Promise<Comment[]> {}

  private toComment(commentEntity: CommentEntity): Comment {
    return {
      id: commentEntity.id,
      userId: commentEntity.userId,
      postId: commentEntity.postId,
      contents: commentEntity.contents,
    };
  }
}
