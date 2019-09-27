import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {commentvisitors_translations} from "./commentvisitors_translations";


@Entity("commentvisitors" ,{schema:"havanacity_db" } )
export class commentvisitors {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"client"
        })
    client:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"phone"
        })
    phone:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"email"
        })
    email:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"comment"
        })
    comment:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"date"
        })
    date:Date;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"readM"
        })
    readM:boolean;
        

   
    @OneToMany(()=>commentvisitors_translations, (commentvisitors_translations: commentvisitors_translations)=>commentvisitors_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    commentvisitorsTranslationss:commentvisitors_translations[];
    
}
