import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class GatheringParticipantEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gatheringId: number;

    @Column()
    userId: number;
}
