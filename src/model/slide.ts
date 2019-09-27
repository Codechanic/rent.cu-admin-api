import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {slide_translations} from "./slide_translations";


@Entity("slide" ,{schema:"havanacity_db" } )
export class slide {

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
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"subtitle"
        })
    subtitle:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"enabled"
        })
    enabled:boolean | null;
        

   
    @OneToMany(()=>slide_translations, (slide_translations: slide_translations)=>slide_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    slideTranslationss:slide_translations[];
    
}
