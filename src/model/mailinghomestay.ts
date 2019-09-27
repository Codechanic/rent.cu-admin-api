import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {mailinghomestay_translations} from "./mailinghomestay_translations";
import {homestay} from "./homestay";


@Entity("mailinghomestay" ,{schema:"havanacity_db" } )
export class mailinghomestay {

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
        name:"body"
        })
    body:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"sended"
        })
    sended:boolean;
        

   
    @OneToMany(()=>mailinghomestay_translations, (mailinghomestay_translations: mailinghomestay_translations)=>mailinghomestay_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    mailinghomestayTranslationss:mailinghomestay_translations[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.mailinghomestays,{  nullable:false, })
    @JoinTable({ name:'mailing_homestays'})
    homestays:homestay[];
    
}
