import { Injectable } from '@nestjs/common';
import { GatheringOpenRequest } from './gathering-open-request';

@Injectable()
export class GatheringWriter {
  write(userId: number, gatheringOpenRequest: GatheringOpenRequest) {}
}
