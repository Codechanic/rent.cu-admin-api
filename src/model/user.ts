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
import { AcmeRole } from './acme_role';

@Entity('user', { schema: 'havanacity_db_dev' })
@Index('UNIQ_8D93D649F85E0677', ['username'], { unique: true })
@Index('UNIQ_8D93D649E7927C74', ['email'], { unique: true })
export class User {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 180,
    name: 'username',
  })
  username: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 180,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 180,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column('varchar', {
    nullable: true,
    name: 'salt',
  })
  salt: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'path',
  })
  path: string | null;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'enabled',
  })
  enabled: boolean;

  @ManyToMany(() => AcmeRole, (acmeRole: AcmeRole) => acmeRole.users, { nullable: false })
  @JoinTable({ name: 'user_role' })
  acmeRoles: AcmeRole[];

}
