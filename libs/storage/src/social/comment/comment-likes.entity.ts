import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommentLikesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  commentId: number;

  userId: number;

  constructor(commentId: number, userId: number) {
    this.commentId = commentId;
    this.userId = userId;
  }
}
