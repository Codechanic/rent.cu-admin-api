import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {acommodationtype} from "./acommodationtype";
import {location} from "./location";
import {municipality} from "./municipality";
import {homestay_chain} from "./homestay_chain";
import {comment} from "./comment";
import {homestay_price} from "./homestay_price";
import {homestay_translations} from "./homestay_translations";
import {rcu_contactform} from "./rcu_contactform";
import {rcu_promo} from "./rcu_promo";
import {season} from "./season";
import {homestay_extracost} from "./homestay_extracost";
import {homestay_freeservices} from "./homestay_freeservices";
import {interest} from "./interest";
import {homestay_notoffered} from "./homestay_notoffered";
import {place} from "./place";
import {mailinghomestay} from "./mailinghomestay";


@Entity("homestay" ,{schema:"havanacity_db" } )
@Index("UNIQ_8127E0525E237E06",["name",],{unique:true})
@Index("UNIQ_8127E052E7927C74",["email",],{unique:true})
@Index("IDX_8127E0528BF177F8",["acommodation",])
@Index("IDX_8127E05264D218E",["location",])
@Index("IDX_8127E052AE6F181C",["municipality",])
@Index("IDX_8127E052966C2F62",["chain",])
export class homestay {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>acommodationtype, (acommodationtype: acommodationtype)=>acommodationtype.homestays,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'acommodation_id'})
    acommodation:acommodationtype | null;


   
    @ManyToOne(()=>location, (location: location)=>location.homestays,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'location_id'})
    location:location | null;


    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("longtext",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phones"
        })
    phones:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"email"
        })
    email:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"rooms"
        })
    rooms:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"promo"
        })
    promo:boolean;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"latitude"
        })
    latitude:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"longitude"
        })
    longitude:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_title"
        })
    meta_title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_description"
        })
    meta_description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_keywords"
        })
    meta_keywords:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"owner"
        })
    owner:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"comision"
        })
    comision:number;
        

   
    @ManyToOne(()=>municipality, (municipality: municipality)=>municipality.homestays,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'municipality_id'})
    municipality:municipality | null;


    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"breakfastprice"
        })
    breakfastprice:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"bedprice"
        })
    bedprice:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"bedchildprice"
        })
    bedchildprice:number | null;
        

   
    @ManyToOne(()=>homestay_chain, (homestay_chain: homestay_chain)=>homestay_chain.homestays,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'chain_id'})
    chain:homestay_chain | null;


    @Column("varchar",{ 
        nullable:true,
        name:"account"
        })
    account:string | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"showcontact"
        })
    showcontact:boolean;
        

    @Column("int",{ 
        nullable:false,
        name:"rank"
        })
    rank:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"show_home"
        })
    show_home:boolean;
        

    @Column("longtext",{ 
        nullable:false,
        name:"note"
        })
    note:string;
        

   
    @OneToMany(()=>comment, (comment: comment)=>comment.homestay,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    comments:comment[];
    

   
    @OneToMany(()=>homestay_price, (homestay_price: homestay_price)=>homestay_price.homestay,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayPrices:homestay_price[];
    

   
    @OneToMany(()=>homestay_translations, (homestay_translations: homestay_translations)=>homestay_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayTranslationss:homestay_translations[];
    

   
    @OneToMany(()=>rcu_contactform, (rcu_contactform: rcu_contactform)=>rcu_contactform.homestay,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuContactforms:rcu_contactform[];
    

   
    @OneToMany(()=>rcu_promo, (rcu_promo: rcu_promo)=>rcu_promo.homestay,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuPromos:rcu_promo[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.homestays,{  nullable:false, })
    @JoinTable({ name:'homestay_season'})
    seasons:season[];
    

   
    @ManyToMany(()=>homestay_extracost, (homestay_extracost: homestay_extracost)=>homestay_extracost.homestays,{  nullable:false, })
    @JoinTable({ name:'homestays_extracosts'})
    homestayExtracosts:homestay_extracost[];
    

   
    @ManyToMany(()=>homestay_freeservices, (homestay_freeservices: homestay_freeservices)=>homestay_freeservices.homestays,{  nullable:false, })
    @JoinTable({ name:'homestays_freeservices'})
    homestayFreeservicess:homestay_freeservices[];
    

   
    @ManyToMany(()=>interest, (interest: interest)=>interest.homestays,{  nullable:false, })
    @JoinTable({ name:'homestays_interests'})
    interests:interest[];
    

   
    @ManyToMany(()=>homestay_notoffered, (homestay_notoffered: homestay_notoffered)=>homestay_notoffered.homestays,{  nullable:false, })
    @JoinTable({ name:'homestays_notoffereds'})
    homestayNotoffereds:homestay_notoffered[];
    

   
    @ManyToMany(()=>place, (place: place)=>place.homestays,{  nullable:false, })
    @JoinTable({ name:'homestays_places'})
    places:place[];
    

   
    @ManyToMany(()=>mailinghomestay, (mailinghomestay: mailinghomestay)=>mailinghomestay.homestays)
    mailinghomestays:mailinghomestay[];
    
}
