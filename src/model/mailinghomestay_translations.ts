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
import { MailingHomeStay } from './mailinghomestay';

@Entity('mailinghomestay_translations', { schema: 'havanacity_db_dev' })
@Index('lookup_unique_idx', ['locale', 'object', 'field'], { unique: true })
@Index('IDX_9888365C232D562B', ['object'])
export class MailingHomeStayTranslations {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => MailingHomeStay, (mailingHomeStay: MailingHomeStay) => mailingHomeStay.mailinghomestayTranslationss, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'object_id' })
  object: MailingHomeStay | null;

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
