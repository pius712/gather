import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '@gather/storage/support/base.entity';

@Entity()
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postId: number;

  @Column()
  userId: number;

  @Column()
  contents: string;

  constructor(postId: number, userId: number, contents: string) {
    this.postId = postId;
    this.userId = userId;
    this.contents = contents;
  }
}
