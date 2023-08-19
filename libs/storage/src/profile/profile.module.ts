import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from '@gather/storage/profile/profile.entity';
import { ProfileRepository } from '@gather/storage/profile/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  providers: [ProfileRepository],
  exports: [ProfileRepository],
})
export class ProfileModule {}
