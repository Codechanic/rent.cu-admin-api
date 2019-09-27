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

@Entity('user', { schema: 'havanacity_db' })
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

  @Column('varchar', {
    nullable: false,
    length: 180,
    name: 'username_canonical',
  })
  username_canonical: string;

  @Column('varchar', {
    nullable: false,
    length: 180,
    name: 'email_canonical',
  })
  email_canonical: string;

  @Column('datetime', {
    nullable: true,
    name: 'last_login',
  })
  last_login: Date | null;

  @Column('varchar', {
    nullable: true,
    length: 180,
    name: 'confirmation_token',
  })
  confirmation_token: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'password_requested_at',
  })
  password_requested_at: Date | null;

  @Column('longtext', {
    nullable: false,
    name: 'roles',
  })
  roles: string;

  @ManyToMany(() => AcmeRole, (acme_role: AcmeRole) => acme_role.users, { nullable: false })
  @JoinTable({ name: 'user_role' })
  acmeRoles: AcmeRole[];

}
