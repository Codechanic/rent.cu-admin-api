import { HomeStay } from '../model/homestay';
import { HomeStayChain } from '../model/homestay_chain';
import { HomeStayPrice } from '../model/homestay_price';
import { Comment } from '../model/comment';
import { CommentTranslations } from '../model/comment_translations';
import { AccommodationType } from '../model/accommodationType';
import { ExtraCost } from '../model/homestay_extracost';
import { FreeService } from '../model/homestay_freeservices';
import { NotOffered } from '../model/homestay_notoffered';
import { HomeStayTranslations } from '../model/homestay_translations';
import { Interest } from '../model/interest';
import { InterestTranslations } from '../model/interest_translations';
import { LocationType } from '../model/location';
import { MailingHomeStay } from '../model/mailinghomestay';
import { MailingHomeStayTranslations } from '../model/mailinghomestay_translations';
import { MunicipalityTranslations } from '../model/municipality_translations';
import { Municipality } from '../model/municipality';
import { Place } from '../model/place';
import { Province } from '../model/province';
import { ProvinceTranslations } from '../model/province_translations';
import { RCUContactForm } from '../model/rcu_contactform';
import { RCUPromo } from '../model/rcu_promo';
import { RCUPromoTranslations } from '../model/rcu_promo_translations';
import { Season } from '../model/season';
import { SeasonRange } from '../model/season_range';
import { AccommodationTypeTranslations } from '../model/acommodationtype_translations';

const entities = [
  HomeStay,
  HomeStayTranslations,
  HomeStayChain,
  HomeStayPrice,
  Comment,
  CommentTranslations,
  AccommodationType,
  AccommodationTypeTranslations,
  ExtraCost,
  FreeService,
  NotOffered,
  Interest,
  InterestTranslations,
  LocationType,
  MailingHomeStay,
  MailingHomeStayTranslations,
  MunicipalityTranslations,
  Municipality,
  Place,
  Province,
  ProvinceTranslations,
  RCUContactForm,
  RCUPromo,
  RCUPromoTranslations,
  Season,
  SeasonRange,
];

export default entities;