import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {mailing_translations} from "./mailing_translations";
import {contact} from "./contact";


@Entity("mailing" ,{schema:"havanacity_db" } )
export class mailing {

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
        

   
    @OneToMany(()=>mailing_translations, (mailing_translations: mailing_translations)=>mailing_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    mailingTranslationss:mailing_translations[];
    

   
    @ManyToMany(()=>contact, (contact: contact)=>contact.mailings,{  nullable:false, })
    @JoinTable({ name:'mailing_contact'})
    contacts:contact[];
    
}
