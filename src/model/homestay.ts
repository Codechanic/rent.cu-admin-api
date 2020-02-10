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
import { AccommodationType } from './accommodationType';
import { LocationType } from './location';
import { Municipality } from './municipality';
import { HomeStayChain } from './homestay_chain';
import { Comment } from './comment';
import { HomeStayPrice } from './homestay_price';
import { HomeStayTranslations } from './homestay_translations';
import { RCUContactForm } from './rcu_contactform';
import { RCUPromo } from './rcu_promo';
import { Season } from './season';
import { ExtraCost } from './homestay_extracost';
import { FreeService } from './homestay_freeservices';
import { Interest } from './interest';
import { NotOffered } from './homestay_notoffered';
import { Place } from './place';
import { MailingHomeStay } from './mailinghomestay';
import { User } from './user';

@Entity('homestay', { schema: 'havanacity_db_dev' })
@Index('UNIQ_8127E0525E237E06', ['name'], { unique: true })
@Index('UNIQ_8127E052E7927C74', ['email'], { unique: true })
@Index('IDX_8127E0528BF177F8', ['accommodation'])
@Index('IDX_8127E05264D218E', ['location'])
@Index('IDX_8127E052AE6F181C', ['municipality'])
@Index('IDX_8127E052966C2F62', ['chain'])
export class HomeStay {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => AccommodationType, (acommodationtype: AccommodationType) => acommodationtype.homestays, {
    onDelete: 'SET NULL',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'acommodation_id' })
  accommodation: AccommodationType | null;

  @ManyToOne(() => LocationType, (location: LocationType) => location.homestays, {
    onDelete: 'SET NULL',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'location_id' })
  location: LocationType | null;

  @Column('varchar', {
    nullable: false,
    name: 'slug',
  })
  slug: string;

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

  @Column('longtext', {
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column('varchar', {
    nullable: true,
    name: 'address',
  })
  address: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'phones',
  })
  phones: string | null;

  @Column('varchar', {
    nullable: true,
    unique: true,
    name: 'email',
  })
  email: string | null;

  @Column('int', {
    nullable: false,
    name: 'rooms',
  })
  rooms: number;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'promo',
  })
  promo: boolean;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'latitude',
  })
  latitude: number | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'longitude',
  })
  longitude: number | null;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'enabled',
  })
  enabled: boolean;

  @Column('varchar', {
    nullable: true,
    name: 'meta_title',
  })
  metaTitle: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'meta_description',
  })
  metaDescription: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'meta_keywords',
  })
  metaKeywords: string | null;

  @Column('varchar', {
    nullable: false,
    name: 'owner',
  })
  owner: string;

  @Column('double', {
    nullable: false,
    precision: 22,
    name: 'comision',
  })
  comision: number;

  @ManyToOne(() => Municipality, (municipality: Municipality) => municipality.homestays, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'breakfastprice',
  })
  breakfastprice: number | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'bedprice',
  })
  bedprice: number | null;

  @Column('double', {
    nullable: true,
    precision: 22,
    name: 'bedchildprice',
  })
  bedchildprice: number | null;

  @ManyToOne(() => HomeStayChain, (homeStayChain: HomeStayChain) => homeStayChain.homestays, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'chain_id' })
  chain: HomeStayChain | null;

  @Column('varchar', {
    nullable: true,
    name: 'account',
  })
  account: string | null;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'showcontact',
  })
  showcontact: boolean;

  @Column('int', {
    nullable: false,
    name: 'rank',
  })
  rank: number;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'show_home',
  })
  showHome: boolean;

  @Column('longtext', {
    nullable: false,
    name: 'note',
  })
  note: string;

  @OneToMany(() => Comment, (comment: Comment) => comment.homestay, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  comments: Comment[];

  @OneToMany(() => HomeStayPrice, (homeStayPrice: HomeStayPrice) => homeStayPrice.homestay, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    cascade: true
  })
  homestayPrices: HomeStayPrice[];

  @OneToMany(() => HomeStayTranslations, (homeStayTranslations: HomeStayTranslations) => homeStayTranslations.object, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  homestayTranslationss: HomeStayTranslations[];

  // tslint:disable-next-line:max-line-length
  @OneToMany(() => RCUContactForm, (rcuContactForm: RCUContactForm) => rcuContactForm.homestay, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  rcuContactforms: RCUContactForm[];

  @OneToMany(() => RCUPromo, (rcuPromo: RCUPromo) => rcuPromo.homestay, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  rcuPromos: RCUPromo[];

  @ManyToMany(() => Season, (season: Season) => season.homestays, { nullable: false })
  @JoinTable({
    name: 'homestay_season',
    joinColumn: {
      name: 'homestay_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'season_id',
      referencedColumnName: 'id',
    },
  })
  seasons: Season[];

  @ManyToMany(() => ExtraCost, (extraCost: ExtraCost) => extraCost.homestays, { nullable: false })
  @JoinTable({
    name: 'homestays_extracosts',
    joinColumn: {
      name: 'homestay_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'homestayextracost_id',
      referencedColumnName: 'id',
    },
  })
  homestayExtracosts: ExtraCost[];

  @ManyToMany(() => FreeService, (freeService: FreeService) => freeService.homestays, { nullable: false })
  @JoinTable({
    name: 'homestays_freeservices',
    joinColumn: {
      name: 'homestay_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'homestayfreeservice_id',
      referencedColumnName: 'id',
    },
  })
  homestayFreeservices: FreeService[];

  @ManyToMany(() => Interest, (interest: Interest) => interest.homestays, { nullable: false })
  @JoinTable({ name: 'homestays_interests' })
  interests: Interest[];

  @ManyToMany(() => NotOffered, (notOffered: NotOffered) => notOffered.homestays, { nullable: false })
  @JoinTable({
    name: 'homestays_notoffereds',
    joinColumn: {
      name: 'homestay_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'homestaynotoffered_id',
      referencedColumnName: 'id',
    },
  })
  homestayNotOffered: NotOffered[];

  @ManyToMany(() => Place, (place: Place) => place.homestays, { nullable: false })
  @JoinTable({
    name: 'homestays_places',
    joinColumn: {
      name: 'homestay_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'place_id',
      referencedColumnName: 'id',
    },
  })
  places: Place[];

  @ManyToMany(() => MailingHomeStay, (mailingHomeStay: MailingHomeStay) => mailingHomeStay.homestays)
  mailinghomestays: MailingHomeStay[];

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  ownerId: bigint;

}
