import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {category} from "./category";
import {article_translations} from "./article_translations";


@Entity("article" ,{schema:"havanacity_db" } )
@Index("IDX_23A0E6612469DE2",["category",])
export class article {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>category, (category: category)=>category.articles,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'category_id'})
    category:category | null;


    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"created"
        })
    created:Date;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("longtext",{ 
        nullable:false,
        name:"text"
        })
    text:string;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"enabled"
        })
    enabled:boolean | null;
        

    @Column("int",{ 
        nullable:true,
        name:"menu"
        })
    menu:number | null;
        

   
    @OneToMany(()=>article_translations, (article_translations: article_translations)=>article_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    articleTranslationss:article_translations[];
    
}
