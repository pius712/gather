import { Host } from './host';

export interface JoiningGathering {
  host: Host;
  title: string;
  contents: string;
  gatheringDate: Date;
  dueDate: Date;
  limit: number;
}
