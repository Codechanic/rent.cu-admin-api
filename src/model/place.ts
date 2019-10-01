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

@Entity('place', { schema: 'havanacity_db' })
export class Place {

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

  @Column('longtext', {
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column('varchar', {
    nullable: true,
    name: 'path',
  })
  path: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'meta_title',
  })
  metaTitle: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'meta_description',
  })
  metaDescription: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'meta_keywords',
  })
  metaKeywords: string | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'latitude',
  })
  latitude: number | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'longitude',
  })
  longitude: number | null;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'enabled',
  })
  enabled: boolean;

  @Column('varchar', {
    nullable: true,
    name: 'address',
  })
  address: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'phones',
  })
  phones: string | null;

}
