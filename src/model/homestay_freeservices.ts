import {
  BaseEntity,
  Column,
  Entity,
  Index, ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { HomeStay } from './homestay';

@Entity('homestay_freeservices', { schema: 'havanacity_db_dev' })
@Index('UNIQ_F0A6CA7A5E237E06', ['name'], { unique: true })
export class FreeService {

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

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.homestayFreeservicess)
  homestays: HomeStay[];
}
