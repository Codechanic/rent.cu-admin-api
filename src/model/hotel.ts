import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_chain} from "./hotel_chain";
import {location} from "./location";
import {municipality} from "./municipality";
import {hotel_price} from "./hotel_price";
import {hotel_supplement} from "./hotel_supplement";
import {hotel_translations} from "./hotel_translations";
import {hotelroom} from "./hotelroom";
import {season} from "./season";
import {hotel_extracost} from "./hotel_extracost";
import {hotel_freeservices} from "./hotel_freeservices";
import {interest} from "./interest";
import {hotel_notoffered} from "./hotel_notoffered";
import {place} from "./place";
import {hotel_plan} from "./hotel_plan";
import {hotel_roomtype} from "./hotel_roomtype";


@Entity("hotel" ,{schema:"havanacity_db" } )
@Index("UNIQ_3535ED95E237E06",["name",],{unique:true})
@Index("UNIQ_3535ED9E7927C74",["email",],{unique:true})
@Index("IDX_3535ED9966C2F62",["chain",])
@Index("IDX_3535ED964D218E",["location",])
@Index("IDX_3535ED9AE6F181C",["municipality",])
export class hotel {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>hotel_chain, (hotel_chain: hotel_chain)=>hotel_chain.hotels,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'chain_id'})
    chain:hotel_chain | null;


   
    @ManyToOne(()=>location, (location: location)=>location.hotels,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        

    @Column("int",{ 
        nullable:false,
        name:"category"
        })
    category:number;
        

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
        name:"promo"
        })
    promo:boolean;
        

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
        

   
    @ManyToOne(()=>municipality, (municipality: municipality)=>municipality.hotels,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'municipality_id'})
    municipality:municipality | null;


    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"tpsup"
        })
    tpsup:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"hotelplus"
        })
    hotelplus:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"stars"
        })
    stars:number | null;
        

   
    @OneToMany(()=>hotel_price, (hotel_price: hotel_price)=>hotel_price.hotel,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelPrices:hotel_price[];
    

   
    @OneToMany(()=>hotel_supplement, (hotel_supplement: hotel_supplement)=>hotel_supplement.hotel,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelSupplements:hotel_supplement[];
    

   
    @OneToMany(()=>hotel_translations, (hotel_translations: hotel_translations)=>hotel_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelTranslationss:hotel_translations[];
    

   
    @OneToMany(()=>hotelroom, (hotelroom: hotelroom)=>hotelroom.hotel,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelrooms:hotelroom[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.hotels,{  nullable:false, })
    @JoinTable({ name:'hotel_season'})
    seasons:season[];
    

   
    @ManyToMany(()=>hotel_extracost, (hotel_extracost: hotel_extracost)=>hotel_extracost.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_extracosts'})
    hotelExtracosts:hotel_extracost[];
    

   
    @ManyToMany(()=>hotel_freeservices, (hotel_freeservices: hotel_freeservices)=>hotel_freeservices.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_freeservices'})
    hotelFreeservicess:hotel_freeservices[];
    

   
    @ManyToMany(()=>interest, (interest: interest)=>interest.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_interests'})
    interests:interest[];
    

   
    @ManyToMany(()=>hotel_notoffered, (hotel_notoffered: hotel_notoffered)=>hotel_notoffered.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_notoffereds'})
    hotelNotoffereds:hotel_notoffered[];
    

   
    @ManyToMany(()=>place, (place: place)=>place.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_places'})
    places:place[];
    

   
    @ManyToMany(()=>hotel_plan, (hotel_plan: hotel_plan)=>hotel_plan.hotels)
    hotelPlans:hotel_plan[];
    

   
    @ManyToMany(()=>hotel_roomtype, (hotel_roomtype: hotel_roomtype)=>hotel_roomtype.hotels,{  nullable:false, })
    @JoinTable({ name:'hotels_rooms'})
    hotelRoomtypes:hotel_roomtype[];
    
}
