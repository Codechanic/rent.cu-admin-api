import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {articule_translations} from "./articule_translations";


@Entity("articule" ,{schema:"havanacity_db" } )
@Index("UNIQ_893CA78F2B36786B",["title",],{unique:true})
export class articule {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"title"
        })
    title:string;
        

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
        

   
    @OneToMany(()=>articule_translations, (articule_translations: articule_translations)=>articule_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    articuleTranslationss:articule_translations[];
    
}
