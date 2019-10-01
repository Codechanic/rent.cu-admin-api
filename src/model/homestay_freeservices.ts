import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('homestay_freeservices', { schema: 'havanacity_db' })
@Index('UNIQ_F0A6CA7A5E237E06', ['name'], { unique: true })
export class FreeService {

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
