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
import { reservation_translations } from './reservation_translations';
import { reservationitems } from './reservationitems';

@Entity('reservation', { schema: 'havanacity_db' })
export class reservation {

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

  @Column('varchar', {
    nullable: false,
    name: 'flynumber',
  })
  flynumber: string;

  @Column('varchar', {
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    name: 'phone',
  })
  phone: string;

  @Column('varchar', {
    nullable: false,
    name: 'country',
  })
  country: string;

  @Column('varchar', {
    nullable: false,
    name: 'token',
  })
  token: string;

  @Column('int', {
    nullable: false,
    name: 'status',
  })
  status: number;

  @Column('varchar', {
    nullable: false,
    name: 'code',
  })
  code: string;

  @Column('varchar', {
    nullable: false,
    name: 'passport',
  })
  passport: string;

  @Column('varchar', {
    nullable: false,
    name: 'terminal',
  })
  terminal: string;

  @Column('varchar', {
    nullable: false,
    name: 'observations',
  })
  observations: string;

  @Column('varchar', {
    nullable: false,
    name: 'created',
  })
  created: string;

  @OneToMany(() => reservation_translations, (reservation_translations: reservation_translations) => reservation_translations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  reservationTranslationss: reservation_translations[];

  @OneToMany(() => reservationitems, (reservationitems: reservationitems) => reservationitems.reservation, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  reservationitemss: reservationitems[];

}
