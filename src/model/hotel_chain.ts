import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel} from "./hotel";
import {hotel_supplement} from "./hotel_supplement";
import {season} from "./season";


@Entity("hotel_chain" ,{schema:"havanacity_db" } )
@Index("UNIQ_52D6D60E5E237E06",["name",],{unique:true})
export class hotel_chain {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

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
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"childdiscount"
        })
    childdiscount:number | null;
        

   
    @OneToMany(()=>hotel, (hotel: hotel)=>hotel.chain,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotels:hotel[];
    

   
    @OneToMany(()=>hotel_supplement, (hotel_supplement: hotel_supplement)=>hotel_supplement.chain,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelSupplements:hotel_supplement[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.hotelChains,{  nullable:false, })
    @JoinTable({ name:'hotel_chain_seasons'})
    seasons:season[];
    
}
