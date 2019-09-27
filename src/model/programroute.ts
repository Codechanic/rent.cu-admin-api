import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programroute_price} from "./programroute_price";
import {programroute_translations} from "./programroute_translations";
import {season} from "./season";


@Entity("programroute" ,{schema:"havanacity_db" } )
export class programroute {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"filepath"
        })
    filepath:string | null;
        

   
    @OneToMany(()=>programroute_price, (programroute_price: programroute_price)=>programroute_price.program,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programroutePrices:programroute_price[];
    

   
    @OneToMany(()=>programroute_translations, (programroute_translations: programroute_translations)=>programroute_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programrouteTranslationss:programroute_translations[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.programroutes,{  nullable:false, })
    @JoinTable({ name:'programroute_season'})
    seasons:season[];
    
}
