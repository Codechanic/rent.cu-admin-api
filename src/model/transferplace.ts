import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {flight} from "./flight";
import {transfer} from "./transfer";
import {transfer_collective} from "./transfer_collective";
import {transferplace_translations} from "./transferplace_translations";


@Entity("transferplace" ,{schema:"havanacity_db" } )
export class transferplace {

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
        

   
    @OneToMany(()=>flight, (flight: flight)=>flight.to,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flights:flight[];
    

   
    @OneToMany(()=>flight, (flight: flight)=>flight.from,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flights2:flight[];
    

   
    @OneToMany(()=>transfer, (transfer: transfer)=>transfer.to,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfers:transfer[];
    

   
    @OneToMany(()=>transfer, (transfer: transfer)=>transfer.from,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfers2:transfer[];
    

   
    @OneToMany(()=>transfer_collective, (transfer_collective: transfer_collective)=>transfer_collective.to,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferCollectives:transfer_collective[];
    

   
    @OneToMany(()=>transfer_collective, (transfer_collective: transfer_collective)=>transfer_collective.from,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferCollectives2:transfer_collective[];
    

   
    @OneToMany(()=>transferplace_translations, (transferplace_translations: transferplace_translations)=>transferplace_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferplaceTranslationss:transferplace_translations[];
    
}
