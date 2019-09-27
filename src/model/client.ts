import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {client_translations} from "./client_translations";
import {mailingclient} from "./mailingclient";


@Entity("client" ,{schema:"havanacity_db" } )
export class client {

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
        name:"email"
        })
    email:string;
        

   
    @OneToMany(()=>client_translations, (client_translations: client_translations)=>client_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientTranslationss:client_translations[];
    

   
    @ManyToMany(()=>mailingclient, (mailingclient: mailingclient)=>mailingclient.clients)
    mailingclients:mailingclient[];
    
}
