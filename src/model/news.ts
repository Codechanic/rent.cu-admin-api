import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {news_translations} from "./news_translations";


@Entity("news" ,{schema:"havanacity_db" } )
export class news {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"date"
        })
    date:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"active"
        })
    active:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

   
    @OneToMany(()=>news_translations, (news_translations: news_translations)=>news_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    newsTranslationss:news_translations[];
    
}
