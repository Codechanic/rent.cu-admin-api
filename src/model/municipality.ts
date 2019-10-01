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
import { Province } from './province';
import { MunicipalityTranslations } from './municipality_translations';

@Entity('municipality', { schema: 'havanacity_db' })
@Index('UNIQ_C6F566285E237E06', ['name'], { unique: true })
@Index('IDX_C6F56628E946114A', ['province'])
export class Municipality {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Province, (province: Province) => province.municipalitys, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'province_id' })
  province: Province | null;

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

  @OneToMany(() => MunicipalityTranslations, (municipalityTranslations: MunicipalityTranslations) => municipalityTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  municipalityTranslationss: MunicipalityTranslations[];

}
