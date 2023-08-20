import { Module } from '@nestjs/common';
import { ProfileReader } from './profile.reader';
import { ProfileService } from './profile.service';
import { ProfileWriter } from './profile.writer';

@Module({
  providers: [ProfileReader, ProfileWriter, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
