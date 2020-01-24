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
import { InterestTranslations } from './interest_translations';
import { HomeStay } from './homestay';

@Entity('interest', { schema: 'havanacity_db_dev' })
@Index('UNIQ_6C3E1A675E237E06', ['name'], { unique: true })
export class Interest {

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

  @Column('varchar', {
    nullable: true,
    name: 'path',
  })
  path: string | null;

  @OneToMany(() => InterestTranslations, (interestTranslations: InterestTranslations) => interestTranslations.object, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  interestTranslationss: InterestTranslations[];

  @ManyToMany(() => HomeStay, (homeStay: HomeStay) => homeStay.interests)
  homestays: HomeStay[];


}
