import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_freeservice_translations} from "./hotel_freeservice_translations";
import {hotel} from "./hotel";


@Entity("hotel_freeservices" ,{schema:"havanacity_db" } )
@Index("UNIQ_86D122795E237E06",["name",],{unique:true})
export class hotel_freeservices {

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
        

   
    @OneToMany(()=>hotel_freeservice_translations, (hotel_freeservice_translations: hotel_freeservice_translations)=>hotel_freeservice_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelFreeserviceTranslationss:hotel_freeservice_translations[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.hotelFreeservicess)
    hotels:hotel[];
    
}
