import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  userId: string;

  @Column()
  bio: string;

  @Column()
  thumbNameUrl: string;

  @Column()
  snsUrl: string;
}
