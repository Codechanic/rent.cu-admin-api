import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotelroomfacility_translations} from "./hotelroomfacility_translations";
import {hotelroom} from "./hotelroom";


@Entity("hotelroomfacility" ,{schema:"havanacity_db" } )
@Index("UNIQ_84031FE5E237E06",["name",],{unique:true})
export class hotelroomfacility {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(()=>hotelroomfacility_translations, (hotelroomfacility_translations: hotelroomfacility_translations)=>hotelroomfacility_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelroomfacilityTranslationss:hotelroomfacility_translations[];
    

   
    @ManyToMany(()=>hotelroom, (hotelroom: hotelroom)=>hotelroom.hotelroomfacilitys)
    hotelrooms:hotelroom[];
    
}
