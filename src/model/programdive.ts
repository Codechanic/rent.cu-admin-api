import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programdive_price} from "./programdive_price";
import {programdive_translations} from "./programdive_translations";
import {season} from "./season";


@Entity("programdive" ,{schema:"havanacity_db" } )
export class programdive {

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
        

   
    @OneToMany(()=>programdive_price, (programdive_price: programdive_price)=>programdive_price.program,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programdivePrices:programdive_price[];
    

   
    @OneToMany(()=>programdive_translations, (programdive_translations: programdive_translations)=>programdive_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programdiveTranslationss:programdive_translations[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.programdives,{  nullable:false, })
    @JoinTable({ name:'programdive_season'})
    seasons:season[];
    
}
