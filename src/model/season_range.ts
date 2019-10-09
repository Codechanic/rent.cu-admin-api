import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Season } from './season';

@Entity('season_range', { schema: 'havanacity_db' })
@Index('IDX_84B6AD964EC001D1', ['season'])
export class SeasonRange {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Season, (season: Season) => season.seasonRanges, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'season_id' })
  season: Season | null;

  @Column('date', {
    nullable: false,
    name: 'start',
  })
  start: string;

  @Column('date', {
    nullable: false,
    name: 'end',
  })
  end: string;

}
