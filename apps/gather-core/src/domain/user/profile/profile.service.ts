import { Injectable } from '@nestjs/common';
import { ProfileUpdateRequest } from './profile-update-request';
import { ProfileCreateRequest } from './profile-create-request';
import { ProfileReader } from './profile.reader';
import { ProfileWriter } from './profile.writer';
import { Profile } from './profile';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileReader: ProfileReader,
    private readonly profileWriter: ProfileWriter,
  ) {}

  async findProfile(id: string): Promise<Profile> {
    return await this.profileReader.read(id);
  }

  async update(
    userId: number,
    updateRequest: ProfileUpdateRequest,
  ): Promise<Profile> {
    this.profileWriter.update(userId, updateRequest);
  }

  async changePrivacy(userId: number, privacy: boolean) {
    this.profileWriter.changePrivacy(userId, privacy);
  }

  async create(createRequest: ProfileCreateRequest): Promise<Profile> {}
}
