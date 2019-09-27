import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {mailingclient_translations} from "./mailingclient_translations";
import {client} from "./client";


@Entity("mailingclient" ,{schema:"havanacity_db" } )
export class mailingclient {

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
        

   
    @OneToMany(()=>mailingclient_translations, (mailingclient_translations: mailingclient_translations)=>mailingclient_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    mailingclientTranslationss:mailingclient_translations[];
    

   
    @ManyToMany(()=>client, (client: client)=>client.mailingclients,{  nullable:false, })
    @JoinTable({ name:'mailing_client'})
    clients:client[];
    
}
