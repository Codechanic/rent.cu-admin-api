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

@Entity('location', { schema: 'havanacity_db' })
@Index('UNIQ_5E9E89CB5E237E06', ['name'], { unique: true })
export class LocationType {

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

  @OneToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.location, { onDelete: 'SET NULL', onUpdate: 'RESTRICT' })
  homestays: HomeStay[];

}
