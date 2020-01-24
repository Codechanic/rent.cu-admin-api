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

@Entity('homestay_extracost', { schema: 'havanacity_db_dev' })
@Index('UNIQ_5B2CEB055E237E06', ['name'], { unique: true })
export class ExtraCost {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'name',
  })
  name: string;

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.homestayExtracosts)
  homestays: HomeStay[];
}
