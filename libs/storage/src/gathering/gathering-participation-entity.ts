import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GatheringParticipationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gatheringId: number;

  @Column()
  userId: number;
}
