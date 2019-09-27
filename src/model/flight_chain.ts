import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {flight} from "./flight";
import {season} from "./season";


@Entity("flight_chain" ,{schema:"havanacity_db" } )
export class flight_chain {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @OneToMany(()=>flight, (flight: flight)=>flight.chain,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flights:flight[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.flightChains,{  nullable:false, })
    @JoinTable({ name:'flight_chain_season'})
    seasons:season[];
    
}
