import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {graphicads_translations} from "./graphicads_translations";


@Entity("graphicads" ,{schema:"havanacity_db" } )
@Index("UNIQ_514346C65E237E06",["name",],{unique:true})
@Index("UNIQ_514346C6F47645AE",["url",],{unique:true})
export class graphicads {

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
        nullable:false,
        unique: true,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

   
    @OneToMany(()=>graphicads_translations, (graphicads_translations: graphicads_translations)=>graphicads_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    graphicadsTranslationss:graphicads_translations[];
    
}
