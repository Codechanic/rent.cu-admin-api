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
import { HomeStay } from './homestay';
import { Season } from './season';

@Entity('homestay_chain', { schema: 'havanacity_db' })
export class HomeStayChain {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @OneToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.chain, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  homestays: HomeStay[];

  @ManyToMany(() => Season, (season: Season) => season.homestayChains, { nullable: false })
  @JoinTable({ name: 'homestay_chain_season' })
  seasons: Season[];

}
