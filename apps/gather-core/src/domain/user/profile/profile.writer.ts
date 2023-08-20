import { Injectable } from '@nestjs/common';
import { ProfileCreateRequest } from './profile-create-request';
import { ProfileEntity, ProfileRepository } from '@gather/storage/profile';
import { ProfileUpdateRequest } from './profile-update-request';

@Injectable()
export class ProfileWriter {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async write(userId: number, createRequest: ProfileCreateRequest) {
    return (
      await this.profileRepository.save(
        new ProfileEntity(
          createRequest.nickname,
          userId,
          createRequest.bio,
          createRequest.thumbNameUrl,
          createRequest.instagramUrl,
          createRequest.interest,
          createRequest.privacy,
        ),
      )
    ).id;
  }

  async update(userId: number, updateRequest: ProfileUpdateRequest) {
    const profileEntity = await this.profileRepository.findByUserId(userId);
    await this.profileRepository.update(userId, {
      ...profileEntity,
      ...updateRequest,
    });
  }

  async changePrivacy(userId: number, privacy: boolean) {
    const profileEntity = await this.profileRepository.findByUserId(userId);
    await this.profileRepository.update(userId, {
      ...profileEntity,
      privacy,
    });
  }
}
