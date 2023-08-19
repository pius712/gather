import { Controller, Post } from '@nestjs/common';
import { ProfileService } from '../../../domain/profile/profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  createProfile(): string {
    return 'This action returns all cats';
  }
}
