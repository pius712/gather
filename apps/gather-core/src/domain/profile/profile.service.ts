import { Injectable } from '@nestjs/common';
import { ProfileUpdateRequest } from './profile-update-request';
import { ProfileCreateRequest } from './profile-create-request';
import { ProfileReader } from './profile.reader';
import { ProfileWriter } from './profile.writer';
import { ProfileUpdater } from './profile-updater';
import { Profile } from './profile';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileReader: ProfileReader,
    private readonly profileWriter: ProfileWriter,
    private readonly profileUpdater: ProfileUpdater,
  ) {}

  async findProfile(id: string): Promise<Profile> {
    return await this.profileReader.read(id);
  }

  async update(updateRequest: ProfileUpdateRequest): Promise<Profile> {}

  async create(createRequest: ProfileCreateRequest): Promise<Profile> {}
}
