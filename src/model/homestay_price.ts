import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {season} from "./season";
import {homestay} from "./homestay";


@Entity("homestay_price" ,{schema:"havanacity_db" } )
@Index("IDX_F47046564EC001D1",["season",])
@Index("IDX_F4704656F20D79E8",["homestay",])
export class homestay_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>season, (season: season)=>season.homestayPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


   
    @ManyToOne(()=>homestay, (homestay: homestay)=>homestay.homestayPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'homestay_id'})
    homestay:homestay | null;


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
