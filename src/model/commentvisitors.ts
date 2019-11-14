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
import { CommentVisitorsTranslations } from './commentvisitors_translations';

@Entity('commentvisitors', { schema: 'havanacity_db_dev' })
export class CommentVisitors {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    name: 'client',
  })
  client: string;

  @Column('varchar', {
    nullable: false,
    name: 'phone',
  })
  phone: string;

  @Column('varchar', {
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column('longtext', {
    nullable: false,
    name: 'comment',
  })
  comment: string;

  @Column('datetime', {
    nullable: false,
    name: 'date',
  })
  date: Date;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'readM',
  })
  readM: boolean;

  @OneToMany(() => CommentVisitorsTranslations,
    (commentVisitorsTranslations: CommentVisitorsTranslations) => commentVisitorsTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  commentvisitorsTranslationss: CommentVisitorsTranslations[];

}
