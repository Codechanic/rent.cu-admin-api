import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {season} from "./season";
import {flight} from "./flight";


@Entity("flight_price" ,{schema:"havanacity_db" } )
@Index("IDX_199FE87F4EC001D1",["season",])
@Index("IDX_199FE87F91F478C5",["flight",])
export class flight_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>season, (season: season)=>season.flightPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


   
    @ManyToOne(()=>flight, (flight: flight)=>flight.flightPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'flight_id'})
    flight:flight | null;


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
        
}
