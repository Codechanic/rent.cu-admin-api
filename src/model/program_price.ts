import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {program_offer} from "./program_offer";
import {season} from "./season";


@Entity("program_price" ,{schema:"havanacity_db" } )
@Index("IDX_54A1512F53C674EE",["offer",])
@Index("IDX_54A1512F4EC001D1",["season",])
export class program_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>program_offer, (program_offer: program_offer)=>program_offer.programPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'offer_id'})
    offer:program_offer | null;


   
    @ManyToOne(()=>season, (season: season)=>season.programPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


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
