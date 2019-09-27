import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {car_price} from "./car_price";
import {flight_price} from "./flight_price";
import {homestay_price} from "./homestay_price";
import {hotel_price} from "./hotel_price";
import {program_price} from "./program_price";
import {programdive_price} from "./programdive_price";
import {programroute_price} from "./programroute_price";
import {programtour_price} from "./programtour_price";
import {season_range} from "./season_range";
import {flight_chain} from "./flight_chain";
import {homestay_chain} from "./homestay_chain";
import {homestay} from "./homestay";
import {hotel_chain} from "./hotel_chain";
import {hotel} from "./hotel";
import {program} from "./program";
import {programdive} from "./programdive";
import {programroute} from "./programroute";
import {programtour} from "./programtour";
import {rental} from "./rental";


@Entity("season" ,{schema:"havanacity_db" } )
export class season {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(()=>car_price, (car_price: car_price)=>car_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    carPrices:car_price[];
    

   
    @OneToMany(()=>flight_price, (flight_price: flight_price)=>flight_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flightPrices:flight_price[];
    

   
    @OneToMany(()=>homestay_price, (homestay_price: homestay_price)=>homestay_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayPrices:homestay_price[];
    

   
    @OneToMany(()=>hotel_price, (hotel_price: hotel_price)=>hotel_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelPrices:hotel_price[];
    

   
    @OneToMany(()=>program_price, (program_price: program_price)=>program_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programPrices:program_price[];
    

   
    @OneToMany(()=>programdive_price, (programdive_price: programdive_price)=>programdive_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programdivePrices:programdive_price[];
    

   
    @OneToMany(()=>programroute_price, (programroute_price: programroute_price)=>programroute_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programroutePrices:programroute_price[];
    

   
    @OneToMany(()=>programtour_price, (programtour_price: programtour_price)=>programtour_price.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programtourPrices:programtour_price[];
    

   
    @OneToMany(()=>season_range, (season_range: season_range)=>season_range.season,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    seasonRanges:season_range[];
    

   
    @ManyToMany(()=>flight_chain, (flight_chain: flight_chain)=>flight_chain.seasons)
    flightChains:flight_chain[];
    

   
    @ManyToMany(()=>homestay_chain, (homestay_chain: homestay_chain)=>homestay_chain.seasons)
    homestayChains:homestay_chain[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.seasons)
    homestays:homestay[];
    

   
    @ManyToMany(()=>hotel_chain, (hotel_chain: hotel_chain)=>hotel_chain.seasons)
    hotelChains:hotel_chain[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.seasons)
    hotels:hotel[];
    

   
    @ManyToMany(()=>program, (program: program)=>program.seasons)
    programs:program[];
    

   
    @ManyToMany(()=>programdive, (programdive: programdive)=>programdive.seasons)
    programdives:programdive[];
    

   
    @ManyToMany(()=>programroute, (programroute: programroute)=>programroute.seasons)
    programroutes:programroute[];
    

   
    @ManyToMany(()=>programtour, (programtour: programtour)=>programtour.seasons)
    programtours:programtour[];
    

   
    @ManyToMany(()=>rental, (rental: rental)=>rental.seasons)
    rentals:rental[];
    
}
