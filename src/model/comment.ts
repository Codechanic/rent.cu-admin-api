import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay} from "./homestay";
import {comment_translations} from "./comment_translations";


@Entity("comment" ,{schema:"havanacity_db" } )
@Index("UNIQ_9474526C5E237E06",["name",],{unique:true})
@Index("IDX_9474526CF20D79E8",["homestay",])
export class comment {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>homestay, (homestay: homestay)=>homestay.comments,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'homestay_id'})
    homestay:homestay | null;


    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"nick"
        })
    nick:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

    @Column("longtext",{ 
        nullable:false,
        name:"text"
        })
    text:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"rating"
        })
    rating:number;
        

   
    @OneToMany(()=>comment_translations, (comment_translations: comment_translations)=>comment_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    commentTranslationss:comment_translations[];
    
}
