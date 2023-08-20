import { Injectable } from '@nestjs/common';
import { Profile } from './profile';

@Injectable()
export class ProfileReader {
  constructor(private readonly profileReader: ProfileReader) {}

  async read(id: string): Promise<Profile> {
    return await this.profileReader.read(id);
  }
}
