import {
  BaseEntity,
  Column,
  Entity,
  Index, ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { HomeStay } from './homestay';

@Entity('homestay_notoffered', { schema: 'havanacity_db_dev' })
@Index('UNIQ_36E7AD625E237E06', ['name'], { unique: true })
export class NotOffered {

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

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.homestayNotoffereds)
  homestays: HomeStay[];

}
