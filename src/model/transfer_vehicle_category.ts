import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transfer_vehicle} from "./transfer_vehicle";
import {transfer_vehicle_category_translations} from "./transfer_vehicle_category_translations";
import {transfervehiclecategory_translations} from "./transfervehiclecategory_translations";


@Entity("transfer_vehicle_category" ,{schema:"havanacity_db" } )
export class transfer_vehicle_category {

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
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"collective"
        })
    collective:boolean | null;
        

   
    @OneToMany(()=>transfer_vehicle, (transfer_vehicle: transfer_vehicle)=>transfer_vehicle.category,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transferVehicles:transfer_vehicle[];
    

   
    @OneToMany(()=>transfer_vehicle_category_translations, (transfer_vehicle_category_translations: transfer_vehicle_category_translations)=>transfer_vehicle_category_translations.object,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    transferVehicleCategoryTranslationss:transfer_vehicle_category_translations[];
    

   
    @OneToMany(()=>transfervehiclecategory_translations, (transfervehiclecategory_translations: transfervehiclecategory_translations)=>transfervehiclecategory_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transfervehiclecategoryTranslationss:transfervehiclecategory_translations[];
    
}
