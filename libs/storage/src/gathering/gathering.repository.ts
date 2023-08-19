import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GatheringEntity } from '@gather/storage/gathering/gathering.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GatheringRepository {
  constructor(
    @InjectRepository(GatheringEntity)
    private readonly repository: Repository<GatheringEntity>,
  ) {}

  async findById(id: number): Promise<GatheringEntity> {
    return this.repository
      .createQueryBuilder('gathering')
      .where('gathering.id := id', {
        id,
      })
      .getOneOrFail();
  }

  async findByIdIn(ids: number[]) {
    return this.repository
      .createQueryBuilder('gathering')
      .where('gathering.id := in (:ids)', {
        ids,
      })
      .getMany();
  }
}
