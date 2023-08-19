import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../support/base.entity';

@Entity()
export class GatheringEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  limit: number;

  @Column()
  gatheringDate: Date;

  @Column()
  dueDate: Date;
}
