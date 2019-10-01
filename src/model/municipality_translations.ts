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

@Entity('municipality_translations', { schema: 'havanacity_db' })
@Index('lookup_unique_idx', ['locale', 'object', 'field'], { unique: true })
@Index('IDX_3FCB5C96232D562B', ['object'])
export class MunicipalityTranslations {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Municipality, (municipality: Municipality) => municipality.municipalityTranslationss, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'object_id' })
  object: Municipality | null;

  @Column('varchar', {
    nullable: false,
    length: 8,
    name: 'locale',
  })
  locale: string;

  @Column('varchar', {
    nullable: false,
    length: 32,
    name: 'field',
  })
  field: string;

  @Column('longtext', {
    nullable: true,
    name: 'content',
  })
  content: string | null;

}
