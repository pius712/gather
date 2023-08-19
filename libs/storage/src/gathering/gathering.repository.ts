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

  findById(id: number) {}
}
