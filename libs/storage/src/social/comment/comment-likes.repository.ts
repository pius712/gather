import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentLikesEntity } from '@gather/storage/social';
import { Repository } from 'typeorm';

@Injectable()
export class CommentLikesRepository {
  constructor(
    @InjectRepository(CommentLikesEntity)
    private readonly repository: Repository<CommentLikesEntity>,
  ) {}

  async findByCommentId(commentId: number): Promise<CommentLikesEntity[]> {
    return await this.repository
      .createQueryBuilder('commentLikes')
      .where('commentLikes.commentId', {
        commentId,
      })
      .getMany();
  }
}
