import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {promotion_translations} from "./promotion_translations";


@Entity("promotion" ,{schema:"havanacity_db" } )
export class promotion {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"link"
        })
    link:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"color"
        })
    color:string;
        

   
    @OneToMany(()=>promotion_translations, (promotion_translations: promotion_translations)=>promotion_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    promotionTranslationss:promotion_translations[];
    
}
