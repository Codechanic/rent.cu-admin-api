import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programdive} from "./programdive";
import {season} from "./season";


@Entity("programdive_price" ,{schema:"havanacity_db" } )
@Index("IDX_926B3FF23EB8070A",["program",])
@Index("IDX_926B3FF24EC001D1",["season",])
export class programdive_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>programdive, (programdive: programdive)=>programdive.programdivePrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'program_id'})
    program:programdive | null;


   
    @ManyToOne(()=>season, (season: season)=>season.programdivePrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
