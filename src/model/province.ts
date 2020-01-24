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
import { Municipality } from './municipality';
import { ProvinceTranslations } from './province_translations';

@Entity('province', { schema: 'havanacity_db_dev' })
@Index('UNIQ_4ADAD40B5E237E06', ['name'], { unique: true })
export class Province {

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

  @Column('longtext', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'path',
  })
  path: string | null;

  @Column('int', {
    nullable: true,
    name: 'norder',
  })
  norder: number | null;

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

  @OneToMany(() => Municipality, (municipality: Municipality) => municipality.province, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipalitys: Municipality[];

  @OneToMany(() => ProvinceTranslations, (provinceTranslations: ProvinceTranslations) => provinceTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  provinceTranslationss: ProvinceTranslations[];

}
