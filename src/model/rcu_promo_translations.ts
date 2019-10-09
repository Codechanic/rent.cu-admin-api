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
import { RCUPromo } from './rcu_promo';

@Entity('rcu_promo_translations', { schema: 'havanacity_db' })
@Index('lookup_unique_idx', ['locale', 'object', 'field'], { unique: true })
@Index('IDX_B55F71F9232D562B', ['object'])
export class RCUPromoTranslations {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => RCUPromo, (rcuPromo: RCUPromo) => rcuPromo.rcuPromoTranslationss, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'object_id' })
  object: RCUPromo | null;

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
