import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('homestay_notoffered', { schema: 'havanacity_db' })
@Index('UNIQ_36E7AD625E237E06', ['name'], { unique: true })
export class NotOffered {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'name',
  })
  name: string;

}
