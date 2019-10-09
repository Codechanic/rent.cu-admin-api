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
import { HomeStay } from './homestay';

@Entity('homestay_price', { schema: 'havanacity_db' })
@Index('IDX_F47046564EC001D1', ['season'])
@Index('IDX_F4704656F20D79E8', ['homestay'])
export class HomeStayPrice {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Season, (season: Season) => season.homestayPrices, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'season_id' })
  season: Season | null;

  @ManyToOne(() => HomeStay, (homeStay: HomeStay) => homeStay.homestayPrices, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'homestay_id' })
  homestay: HomeStay | null;

  @Column('double', {
    nullable: false,
    precision: 22,
    name: 'price',
  })
  price: number;

  @Column('varchar', {
    nullable: false,
    name: 'code',
  })
  code: string;

}
