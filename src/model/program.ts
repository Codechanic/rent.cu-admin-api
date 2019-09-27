import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {program_offer} from "./program_offer";
import {program_translations} from "./program_translations";
import {season} from "./season";


@Entity("program" ,{schema:"havanacity_db" } )
export class program {

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
        

    @Column("int",{ 
        nullable:false,
        name:"nightsmin"
        })
    nightsmin:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"filepath"
        })
    filepath:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"confortsupplement"
        })
    confortsupplement:number | null;
        

   
    @OneToMany(()=>program_offer, (program_offer: program_offer)=>program_offer.program,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programOffers:program_offer[];
    

   
    @OneToMany(()=>program_translations, (program_translations: program_translations)=>program_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programTranslationss:program_translations[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.programs,{  nullable:false, })
    @JoinTable({ name:'program_season'})
    seasons:season[];
    
}
