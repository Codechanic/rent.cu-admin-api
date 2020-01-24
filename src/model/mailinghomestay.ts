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
import { MailingHomeStayTranslations } from './mailinghomestay_translations';
import { HomeStay } from './homestay';

@Entity('mailinghomestay', { schema: 'havanacity_db_dev' })
export class MailingHomeStay {

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
    name: 'body',
  })
  body: string;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'sended',
  })
  sended: boolean;

  @OneToMany(() => MailingHomeStayTranslations, (mailingHomeStayTranslations: MailingHomeStayTranslations) => mailingHomeStayTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  mailinghomestayTranslationss: MailingHomeStayTranslations[];

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.mailinghomestays, { nullable: false })
  @JoinTable({ name: 'mailing_homestays' })
  homestays: HomeStay[];

}
