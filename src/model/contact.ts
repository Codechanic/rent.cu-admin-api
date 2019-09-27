import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {contact_translations} from "./contact_translations";
import {mailing} from "./mailing";


@Entity("contact" ,{schema:"havanacity_db" } )
export class contact {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"token"
        })
    token:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

   
    @OneToMany(()=>contact_translations, (contact_translations: contact_translations)=>contact_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    contactTranslationss:contact_translations[];
    

   
    @ManyToMany(()=>mailing, (mailing: mailing)=>mailing.contacts)
    mailings:mailing[];
    
}
