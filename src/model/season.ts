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

import { HomeStayPrice } from './homestay_price';
import { SeasonRange } from './season_range';
import { HomeStayChain } from './homestay_chain';
import { HomeStay } from './homestay';


@Entity('season', { schema: 'havanacity_db_dev' })
export class Season {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @OneToMany(() => HomeStayPrice, (homeStayPrice: HomeStayPrice) => homeStayPrice.season, {
    onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  homestayPrices: HomeStayPrice[];

  @OneToMany(() => SeasonRange, (seasonRange: SeasonRange) => seasonRange.season, {
    onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  seasonRanges: SeasonRange[];

  @ManyToMany(() => HomeStayChain, (homeStayChain: HomeStayChain) => homeStayChain.seasons)
  homestayChains: HomeStayChain[];

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.seasons)
  homestays: HomeStay[];

}
