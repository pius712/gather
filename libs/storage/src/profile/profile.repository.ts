import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from '@gather/storage/profile/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRepository {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly repository: Repository<ProfileEntity>,
  ) {}

  findById(id: number): Promise<ProfileEntity> {
    return this.repository
      .createQueryBuilder('profile')
      .where('profile.id := id', {
        id,
      })
      .getOneOrFail();
  }

  findByUserIdIn(userIds: number[]): Promise<ProfileEntity[]> {
    return this.repository
      .createQueryBuilder('profile')
      .where('profile.userId in (:userIds)', {
        userIds: userIds,
      })
      .getMany();
  }

  findByUserId(userId: number): Promise<ProfileEntity> {
    return this.repository
      .createQueryBuilder('profile')
      .where('profile.userId := userId', {
        userId,
      })
      .getOneOrFail();
  }
}
