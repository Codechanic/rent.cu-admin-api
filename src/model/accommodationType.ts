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
import { AccommodationTypeTranslations } from './acommodationtype_translations';

@Entity('acommodationtype', { schema: 'havanacity_db' })
@Index('UNIQ_198CAD195E237E06', ['name'], { unique: true })
export class AccommodationType {

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

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'partial',
  })
  partial: boolean;

  @OneToMany(() => AccommodationTypeTranslations,
    (acommodationTypeTranslations: AccommodationTypeTranslations) => acommodationTypeTranslations.object, {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT',
    })
  acommodationtypeTranslationss: AccommodationTypeTranslations[];

}
