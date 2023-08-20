import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  userId: number;

  @Column()
  bio: string;

  @Column()
  thumbNameUrl: string;

  @Column()
  snsUrl: string;

  @Column()
  interest: string;

  @Column()
  privacy: boolean;

  constructor(
    nickname: string,
    userId: number,
    bio: string,
    thumbNameUrl: string,
    snsUrl: string,
    interest: string,
    privacy: boolean,
  ) {
    this.nickname = nickname;
    this.userId = userId;
    this.bio = bio;
    this.thumbNameUrl = thumbNameUrl;
    this.snsUrl = snsUrl;
    this.interest = interest;
    this.privacy = privacy;
  }
}
