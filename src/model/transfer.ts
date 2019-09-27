import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transfer_vehicle} from "./transfer_vehicle";
import {transferplace} from "./transferplace";
import {transfer_translations} from "./transfer_translations";


@Entity("transfer" ,{schema:"havanacity_db" } )
@Index("IDX_4034A3C0545317D1",["vehicle",])
@Index("IDX_4034A3C078CED90B",["from",])
@Index("IDX_4034A3C030354A65",["to",])
export class transfer {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>transfer_vehicle, (transfer_vehicle: transfer_vehicle)=>transfer_vehicle.transfers,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'vehicle_id'})
    vehicle:transfer_vehicle | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        

   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.transfers2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'from_id'})
    from:transferplace | null;


   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.transfers,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'to_id'})
    to:transferplace | null;


   
    @OneToMany(()=>transfer_translations, (transfer_translations: transfer_translations)=>transfer_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferTranslationss:transfer_translations[];
    
}
