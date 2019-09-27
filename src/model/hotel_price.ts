import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {season} from "./season";
import {hotel} from "./hotel";
import {hotel_plan} from "./hotel_plan";
import {hotelroom} from "./hotelroom";


@Entity("hotel_price" ,{schema:"havanacity_db" } )
@Index("IDX_291CEC1D4EC001D1",["season",])
@Index("IDX_291CEC1D3243BB18",["hotel",])
@Index("IDX_291CEC1D8D40377F",["hotelplan",])
@Index("IDX_291CEC1D31CE4577",["hotelroom",])
export class hotel_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>season, (season: season)=>season.hotelPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


   
    @ManyToOne(()=>hotel, (hotel: hotel)=>hotel.hotelPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'hotel_id'})
    hotel:hotel | null;


   
    @ManyToOne(()=>hotel_plan, (hotel_plan: hotel_plan)=>hotel_plan.hotelPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'hotelplan_id'})
    hotelplan:hotel_plan | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"code"
        })
    code:string;
        

   
    @ManyToOne(()=>hotelroom, (hotelroom: hotelroom)=>hotelroom.hotelPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'hotelroom_id'})
    hotelroom:hotelroom | null;

}
