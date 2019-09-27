import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {season} from "./season";


@Entity("season_range" ,{schema:"havanacity_db" } )
@Index("IDX_84B6AD964EC001D1",["season",])
export class season_range {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>season, (season: season)=>season.seasonRanges,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


    @Column("date",{ 
        nullable:false,
        name:"start"
        })
    start:string;
        

    @Column("date",{ 
        nullable:false,
        name:"end"
        })
    end:string;
        
}
