import { Injectable } from '@nestjs/common';
import { GatheringWriter } from './gathering.writer';
import { GatheringReader } from './gathering.reader';
import { Gathering } from './gathering';
import { GatheringOpenRequest } from './gathering-open-request';
import { GatheringValidator } from './gathering-validator';

@Injectable()
export class GatheringService {
  constructor(
    private readonly gatheringWriter: GatheringWriter,
    private readonly gatheringReader: GatheringReader,
    private readonly gatheringValidator: GatheringValidator,
  ) {}

  async getGathering(id: number): Promise<Gathering> {
    return await this.gatheringReader.read(id);
  }

  async openGathering(
    userId: number,
    gatheringOpenRequest: GatheringOpenRequest,
  ) {
    const joiningGatheringDetails =
      await this.gatheringReader.getJoiningGatherings(userId);

    this.gatheringValidator.assertOpen(
      joiningGatheringDetails,
      gatheringOpenRequest,
    );

    this.gatheringWriter.write(userId, gatheringOpenRequest);
  }

  /**
   * @remarks
   * 성능 안좋아지면, summary 데이터만 보여주도록 변경
   * */
  async getJoinedGathering(userId: number): Promise<Gathering[]> {
    this.gatheringValidator.assertJoin();
    return await this.gatheringReader.readByUserId(userId);
  }

  async requestJoin(userId: number, gatheringId: number) {}

  async getParticipants(gatheringId: number) {}
}
