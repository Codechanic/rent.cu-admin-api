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

@Entity('rcu_contactform', { schema: 'havanacity_db_dev' })
@Index('IDX_E9DFFCA3F20D79E8', ['homestay'])
export class RCUContactForm {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => HomeStay, (homeStay: HomeStay) => homeStay.rcuContactforms, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'homestay_id' })
  homestay: HomeStay | null;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    name: 'phone',
  })
  phone: string;

  @Column('longtext', {
    nullable: true,
    name: 'message',
  })
  message: string | null;

  @Column('date', {
    nullable: false,
    name: 'fromdate',
  })
  fromdate: string;

  @Column('date', {
    nullable: false,
    name: 'todate',
  })
  todate: string;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'active',
  })
  active: boolean;

}
