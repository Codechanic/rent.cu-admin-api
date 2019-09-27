import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {article} from "./article";
import {category_translations} from "./category_translations";


@Entity("category" ,{schema:"havanacity_db" } )
export class category {

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
        

    @Column("varchar",{ 
        nullable:false,
        name:"alias"
        })
    alias:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

   
    @OneToMany(()=>article, (article: article)=>article.category,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    articles:article[];
    

   
    @OneToMany(()=>category_translations, (category_translations: category_translations)=>category_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    categoryTranslationss:category_translations[];
    
}
