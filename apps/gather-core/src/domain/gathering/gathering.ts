import { Host } from './host';
import { Participant } from './Participants';
import { GatheringDetail } from './gathering-detail';

export interface Gathering {
  host: Host;
  detail: GatheringDetail;
  participants: Participant[];
}
