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
import { AccommodationType } from './accommodationType';

@Entity('acommodationtype_translations', { schema: 'havanacity_db_dev' })
@Index('lookup_unique_idx', ['locale', 'object', 'field'], { unique: true })
@Index('IDX_EF67AC90232D562B', ['object'])
export class AccommodationTypeTranslations {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => AccommodationType, (acommodationType: AccommodationType) => acommodationType.acommodationtypeTranslationss, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'object_id' })
  object: AccommodationType | null;

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
