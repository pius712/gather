import { Module } from '@nestjs/common';
import { ProfileUpdater } from './profile-updater';
import { ProfileReader } from './profile.reader';
import { ProfileService } from './profile.service';
import { ProfileWriter } from './profile.writer';

@Module({
  providers: [ProfileUpdater, ProfileReader, ProfileWriter, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
