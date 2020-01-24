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
import { CommentTranslations } from './comment_translations';
import { Season } from "./season";

@Entity('comment', { schema: 'havanacity_db_dev' })
@Index('UNIQ_9474526C5E237E06', ['name'], { unique: true })
@Index('IDX_9474526CF20D79E8', ['homestay'])
export class Comment {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => HomeStay, (homestay: HomeStay) => homestay.comments, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'homestay_id' })
  homestay: HomeStay | null;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: true,
    name: 'nick',
  })
  nick: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'email',
  })
  email: string | null;

  @Column('longtext', {
    nullable: false,
    name: 'text',
  })
  text: string;

  @Column('double', {
    nullable: false,
    precision: 22,
    name: 'rating',
  })
  rating: number;

  @Column('boolean', {
    nullable: false,
    name: 'enabled',
  })
  enabled: boolean;

  @OneToMany(() => CommentTranslations, (commentTranslations: CommentTranslations) => commentTranslations.object, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  commentTranslationss: CommentTranslations[];
}
