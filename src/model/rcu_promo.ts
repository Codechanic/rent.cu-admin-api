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
import { RCUPromoTranslations } from './rcu_promo_translations';

@Entity('rcu_promo', { schema: 'havanacity_db' })
@Index('IDX_538170EDF20D79E8', ['homestay'])
export class RCUPromo {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => HomeStay, (homestay: HomeStay) => homestay.rcuPromos, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'homestay_id' })
  homestay: HomeStay | null;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('int', {
    nullable: false,
    name: 'showcount',
  })
  showcount: number;

  @Column('int', {
    nullable: false,
    name: 'showoffset',
  })
  showoffset: number;

  @Column('varchar', {
    nullable: true,
    name: 'url',
  })
  url: string | null;

  @Column('datetime', {
    nullable: false,
    name: 'from_date',
  })
  formDate: Date;

  @Column('datetime', {
    nullable: false,
    name: 'to_date',
  })
  toDate: Date;

  @Column('varchar', {
    nullable: true,
    name: 'path',
  })
  path: string | null;

  @Column('varchar', {
    nullable: false,
    name: 'promo_type',
  })
  promoType: string;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'discount',
  })
  discount: number | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'price',
  })
  price: number | null;

  @Column('tinyint', {
    nullable: true,
    width: 1,
    name: 'isnew',
  })
  isnew: boolean | null;

  @OneToMany(() => RCUPromoTranslations, (rcuPromoTranslations: RCUPromoTranslations) => rcuPromoTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  rcuPromoTranslationss: RCUPromoTranslations[];

}
