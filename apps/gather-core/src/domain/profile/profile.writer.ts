import { Injectable } from '@nestjs/common';
import { ProfileCreateRequest } from './profile-create-request';

@Injectable()
export class ProfileWriter {
  constructor(private readonly profileRepository: ProfileRepository) {
    super(props);
  }

  write(createRequest: ProfileCreateRequest) {}
}
