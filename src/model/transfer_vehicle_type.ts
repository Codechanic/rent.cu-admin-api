import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transfer_vehicle} from "./transfer_vehicle";
import {transfer_vehicle_type_translations} from "./transfer_vehicle_type_translations";
import {transfervehicletype_translations} from "./transfervehicletype_translations";


@Entity("transfer_vehicle_type" ,{schema:"havanacity_db" } )
export class transfer_vehicle_type {

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
        

    @Column("int",{ 
        nullable:true,
        name:"ordinal"
        })
    ordinal:number | null;
        

   
    @OneToMany(()=>transfer_vehicle, (transfer_vehicle: transfer_vehicle)=>transfer_vehicle.type,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferVehicles:transfer_vehicle[];
    

   
    @OneToMany(()=>transfer_vehicle_type_translations, (transfer_vehicle_type_translations: transfer_vehicle_type_translations)=>transfer_vehicle_type_translations.object,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    transferVehicleTypeTranslationss:transfer_vehicle_type_translations[];
    

   
    @OneToMany(()=>transfervehicletype_translations, (transfervehicletype_translations: transfervehicletype_translations)=>transfervehicletype_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfervehicletypeTranslationss:transfervehicletype_translations[];
    
}
