import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transfer_vehicle_type} from "./transfer_vehicle_type";
import {transfer_vehicle_category} from "./transfer_vehicle_category";
import {transfer} from "./transfer";
import {transfer_vehicle_translations} from "./transfer_vehicle_translations";
import {transfervehicle_translations} from "./transfervehicle_translations";


@Entity("transfer_vehicle" ,{schema:"havanacity_db" } )
@Index("IDX_A43596CDC54C8C93",["type",])
@Index("IDX_A43596CD12469DE2",["category",])
export class transfer_vehicle {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>transfer_vehicle_type, (transfer_vehicle_type: transfer_vehicle_type)=>transfer_vehicle_type.transferVehicles,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'type_id'})
    type:transfer_vehicle_type | null;


   
    @ManyToOne(()=>transfer_vehicle_category, (transfer_vehicle_category: transfer_vehicle_category)=>transfer_vehicle_category.transferVehicles,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'category_id'})
    category:transfer_vehicle_category | null;


    @Column("varchar",{ 
        nullable:false,
        name:"capacity"
        })
    capacity:string;
        

    @Column("int",{ 
        nullable:true,
        name:"ordinal"
        })
    ordinal:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"min_capacity"
        })
    min_capacity:number;
        

    @Column("int",{ 
        nullable:false,
        name:"max_capacity"
        })
    max_capacity:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"partial"
        })
    partial:boolean;
        

   
    @OneToMany(()=>transfer, (transfer: transfer)=>transfer.vehicle,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfers:transfer[];
    

   
    @OneToMany(()=>transfer_vehicle_translations, (transfer_vehicle_translations: transfer_vehicle_translations)=>transfer_vehicle_translations.object,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    transferVehicleTranslationss:transfer_vehicle_translations[];
    

   
    @OneToMany(()=>transfervehicle_translations, (transfervehicle_translations: transfervehicle_translations)=>transfervehicle_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfervehicleTranslationss:transfervehicle_translations[];
    
}
