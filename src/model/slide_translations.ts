import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {slide} from "./slide";


@Entity("slide_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_48D0BD39232D562B",["object",])
export class slide_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>slide, (slide: slide)=>slide.slideTranslationss,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:slide | null;


    @Column("varchar",{ 
        nullable:false,
        length:8,
        name:"locale"
        })
    locale:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:32,
        name:"field"
        })
    field:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        
}
