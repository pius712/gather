import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from '@gather/storage/social/comment/comment.entity';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly repository: Repository<CommentEntity>,
  ) {}

  async save(entity: CommentEntity) {
    await this.repository.save(entity);
  }

  async update(commentId: number, contents: string) {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        contents: contents,
      })
      .where('id =:id', { id: commentId });
  }

  async findById(id: number): Promise<CommentEntity> {
    return await this.repository
      .createQueryBuilder('comment')
      .where('comment.id := id', {
        id,
      })
      .getOneOrFail();
  }

  async findByPostId(postId: number): Promise<CommentEntity[]> {
    return await this.repository
      .createQueryBuilder('comment')
      .where('comment.postId := postId', {
        postId,
      })
      .getMany();
  }

  async findByUserId(userId: number): Promise<CommentEntity[]> {
    return await this.repository
      .createQueryBuilder('comment')
      .where('comment.userId := userId', {
        userId,
      })
      .getMany();
  }
}
