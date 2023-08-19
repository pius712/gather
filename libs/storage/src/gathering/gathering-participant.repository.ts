import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GatheringParticipationEntity } from '@gather/storage/gathering/gathering-participation-entity';
import { Repository } from 'typeorm';

@Injectable()
export class GatheringParticipantRepository {
  constructor(
    @InjectRepository(GatheringParticipationEntity)
    private readonly repository: Repository<GatheringParticipationEntity>,
  ) {}

  async findByGatheringId(id: number): Promise<GatheringParticipationEntity[]> {
    return await this.repository
      .createQueryBuilder('participation')
      .where('participation.gatheringId = :id', {
        id,
      })
      .getMany();
  }

  async findByUserId(userId: number): Promise<GatheringParticipationEntity[]> {
    return await this.repository
      .createQueryBuilder('participation')
      .where('participation.userId = :userId', {
        userId,
      })
      .getMany();
  }
}
