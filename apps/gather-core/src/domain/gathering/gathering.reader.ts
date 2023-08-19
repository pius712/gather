import { Injectable } from '@nestjs/common';
import { GatheringRepository } from '@gather/storage/gathering/gathering.repository';
import { GatheringParticipantRepository } from '@gather/storage/gathering/gathering-participant.repository';
import { Gathering } from './gathering';
import { GatheringEntity } from '@gather/storage/gathering/gathering.entity';
import { ProfileRepository } from '@gather/storage/profile/profile.repository';
import { ProfileEntity } from '@gather/storage/profile/profile.entity';
import { Participant } from './Participants';
import { Host } from './host';
import { GatheringDetail } from './gathering-detail';
import { CoreError } from '../../support/core-error';

@Injectable()
export class GatheringReader {
  constructor(
    private readonly gatheringParticipantRepository: GatheringParticipantRepository,
    private readonly gatheringRepository: GatheringRepository,
    private readonly profileRepository: ProfileRepository,
  ) {}

  async read(id: number): Promise<Gathering> {
    const participantsEntities =
      await this.gatheringParticipantRepository.findByGatheringId(id);
    const participantsId = participantsEntities.map((each) => each.id);

    const participantsProfileEntities =
      await this.profileRepository.findByUserIdIn(participantsId);

    const gatheringEntity = await this.gatheringRepository.findById(id);

    const hostProfileEntity = await this.profileRepository.findByUserId(
      gatheringEntity.userId,
    );

    return this.toGathering(
      participantsProfileEntities,
      hostProfileEntity,
      gatheringEntity,
    );
  }

  /**
   * @remarks
   * 성능 안 좋으면 where in 으로 풀기
   * */
  async readByUserId(userId: number): Promise<Gathering[]> {
    const gatheringParticipants =
      await this.gatheringParticipantRepository.findByUserId(userId);

    return await Promise.all(
      gatheringParticipants.map((each) => this.read(each.gatheringId)),
    );
  }

  async getJoiningGatherings(userId: number): Promise<GatheringDetail[]> {
    const participantEntities =
      await this.gatheringParticipantRepository.findByUserId(userId);
    const gatheringIds = participantEntities.map((each) => each.gatheringId);

    const gatheringEntities = await this.gatheringRepository.findByIdIn(
      gatheringIds,
    );

    const hostIds = gatheringEntities.map((each) => each.userId);
    const hostProfileEntities = await this.profileRepository.findByUserIdIn(
      hostIds,
    );

    return gatheringEntities.map((each) => {
      const matched = hostProfileEntities.find(
        (eachHostProfile) => eachHostProfile.id === each.userId,
      );

      if (!matched) {
        throw new CoreError();
      }

      return {
        host: this.toHost(matched),
        title: each.title,
        contents: each.contents,
        gatheringDate: each.gatheringDate,
        dueDate: each.dueDate,
        limit: each.limit,
      };
    });
  }

  private toGathering(
    participantsEntities: ProfileEntity[],
    hostProfileEntity: ProfileEntity,
    gatheringEntity: GatheringEntity,
  ): Gathering {
    return {
      host: this.toHost(hostProfileEntity),
      participants: participantsEntities.map(this.toParticipant),
      detail: {
        title: gatheringEntity.title,
        gatheringDate: gatheringEntity.gatheringDate,
        dueDate: gatheringEntity.dueDate,
        contents: gatheringEntity.contents,
        limit: gatheringEntity.limit,
      },
    };
  }

  private toHost(profileEntity: ProfileEntity): Host {
    return {
      id: profileEntity.id,
      thumbNaileUrl: profileEntity.thumbNameUrl,
      nickname: profileEntity.nickname,
    };
  }

  private toParticipant(profileEntity: ProfileEntity): Participant {
    return {
      id: profileEntity.id,
      nickname: profileEntity.nickname,
    };
  }
}
