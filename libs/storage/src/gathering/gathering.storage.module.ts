import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatheringEntity } from '@gather/storage/gathering/gathering.entity';
import { GatheringParticipationEntity } from '@gather/storage/gathering/gathering-participation-entity';
import { GatheringRepository } from '@gather/storage/gathering/gathering.repository';
import { GatheringParticipantRepository } from '@gather/storage/gathering/gathering-participant.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GatheringEntity]),
    TypeOrmModule.forFeature([GatheringParticipationEntity]),
  ],
  providers: [GatheringRepository, GatheringParticipantRepository],
  exports: [GatheringRepository, GatheringParticipantRepository],
})
export class GatheringStorageModule {}
