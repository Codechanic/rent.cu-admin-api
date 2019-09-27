import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay} from "./homestay";
import {season} from "./season";


@Entity("homestay_chain" ,{schema:"havanacity_db" } )
export class homestay_chain {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @OneToMany(()=>homestay, (homestay: homestay)=>homestay.chain,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestays:homestay[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.homestayChains,{  nullable:false, })
    @JoinTable({ name:'homestay_chain_season'})
    seasons:season[];
    
}
