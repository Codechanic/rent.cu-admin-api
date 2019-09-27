import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transfer_vehicle_type} from "./transfer_vehicle_type";


@Entity("transfer_vehicle_type_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_A78A5946232D562B",["object",])
export class transfer_vehicle_type_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>transfer_vehicle_type, (transfer_vehicle_type: transfer_vehicle_type)=>transfer_vehicle_type.transferVehicleTypeTranslationss,{ onDelete: 'CASCADE',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:transfer_vehicle_type | null;


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
