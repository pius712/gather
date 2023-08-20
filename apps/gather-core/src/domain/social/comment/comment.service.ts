import { Injectable } from '@nestjs/common';
import { CommentWriter } from './comment-writer';
import { CommentReader } from './comment.reader';
import { CommentValidator } from './comment-validator';
import { LikeUser } from './like-user';
import { Comment } from './comment';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentWriter: CommentWriter,
    private readonly commentReader: CommentReader,
    private readonly commentValidator: CommentValidator,
  ) {}

  async writeComment(postId: number, userId: number, contents: string) {
    await this.commentWriter.write(postId, userId, contents);
  }

  async updateComment(commentId: number, userId: number, contents: string) {
    const comment = await this.commentReader.readById(commentId);
    this.commentValidator.canModify(comment, userId);

    await this.commentWriter.update(commentId, contents);
  }

  async likeComment(commentId: number, userId: number) {
    await this.commentWriter.saveLikes(commentId, userId);
  }

  async getUsersWhoLikesComment(commentId: number): Promise<LikeUser[]> {
    return await this.commentReader.readLikesByCommentId(commentId);
  }

  /**
   * @remarks
   * 유저가 비공개 계정인 경우 못가져와야함.
   * */
  async getCommentLikedByUser(userId: number): Promise<Comment[]> {
    return await this.commentReader.readCommentLikedByUserId(userId);
  }

  /**
   * @remarks
   * 유저가 비공개 계정인 경우 못가져와야함.
   * */
  async getCommentByUser(userId: number) {
    return await this.commentReader.readByUserId(userId);
  }
}
