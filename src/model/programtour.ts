import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {programtour_price} from "./programtour_price";
import {programtour_translations} from "./programtour_translations";
import {season} from "./season";


@Entity("programtour" ,{schema:"havanacity_db" } )
export class programtour {

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
        

   
    @OneToMany(()=>programtour_price, (programtour_price: programtour_price)=>programtour_price.program,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programtourPrices:programtour_price[];
    

   
    @OneToMany(()=>programtour_translations, (programtour_translations: programtour_translations)=>programtour_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programtourTranslationss:programtour_translations[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.programtours,{  nullable:false, })
    @JoinTable({ name:'programtour_season'})
    seasons:season[];
    
}
