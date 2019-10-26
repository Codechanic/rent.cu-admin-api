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

@Entity('homestay_translations', { schema: 'havanacity_db_dev' })
@Index('lookup_unique_idx', ['locale', 'object', 'field'], { unique: true })
@Index('IDX_1BCFC197232D562B', ['object'])
export class HomeStayTranslations {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => HomeStay, (homeStay: HomeStay) => homeStay.homestayTranslationss, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'object_id' })
  object: HomeStay | null;

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
