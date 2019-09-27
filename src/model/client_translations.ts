import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {client} from "./client";


@Entity("client_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_77BD7886232D562B",["object",])
export class client_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>client, (client: client)=>client.clientTranslationss,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:client | null;


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
