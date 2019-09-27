import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programtour} from "./programtour";
import {season} from "./season";


@Entity("programtour_price" ,{schema:"havanacity_db" } )
@Index("IDX_EA2962333EB8070A",["program",])
@Index("IDX_EA2962334EC001D1",["season",])
export class programtour_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>programtour, (programtour: programtour)=>programtour.programtourPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'program_id'})
    program:programtour | null;


   
    @ManyToOne(()=>season, (season: season)=>season.programtourPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"childprice"
        })
    childprice:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"supplement"
        })
    supplement:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"code"
        })
    code:string;
        
}
