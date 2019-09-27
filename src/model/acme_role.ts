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
import { User } from './user';

@Entity('acme_role', { schema: 'havanacity_db' })
@Index('UNIQ_8D4398B157698A6A', ['role'], { unique: true })
export class AcmeRole {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 30,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 20,
    name: 'role',
  })
  role: string;

  @ManyToMany(() => User, (user: User) => user.acmeRoles)
  users: User[];

}
