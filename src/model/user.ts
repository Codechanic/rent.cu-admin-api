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
  usernameCanonical: string;

  @Column('varchar', {
    nullable: false,
    length: 180,
    name: 'email_canonical',
  })
  emailCanonical: string;

  @Column('datetime', {
    nullable: true,
    name: 'last_login',
  })
  lastLogin: Date | null;

  @Column('varchar', {
    nullable: true,
    length: 180,
    name: 'confirmation_token',
  })
  confirmationToken: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'password_requested_at',
  })
  passwordRequestedAt: Date | null;

  @Column('longtext', {
    nullable: false,
    name: 'roles',
  })
  roles: string;

  @ManyToMany(() => AcmeRole, (acmeRole: AcmeRole) => acmeRole.users, { nullable: false })
  @JoinTable({ name: 'user_role' })
  acmeRoles: AcmeRole[];

}
