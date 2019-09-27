import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programroute} from "./programroute";
import {season} from "./season";


@Entity("programroute_price" ,{schema:"havanacity_db" } )
@Index("IDX_22C61DBB3EB8070A",["program",])
@Index("IDX_22C61DBB4EC001D1",["season",])
export class programroute_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>programroute, (programroute: programroute)=>programroute.programroutePrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'program_id'})
    program:programroute | null;


   
    @ManyToOne(()=>season, (season: season)=>season.programroutePrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
