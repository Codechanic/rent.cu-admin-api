import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay} from "./homestay";
import {hotel} from "./hotel";
import {location_translations} from "./location_translations";


@Entity("location" ,{schema:"havanacity_db" } )
@Index("UNIQ_5E9E89CB5E237E06",["name",],{unique:true})
export class location {

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
        

   
    @OneToMany(()=>homestay, (homestay: homestay)=>homestay.location,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestays:homestay[];
    

   
    @OneToMany(()=>hotel, (hotel: hotel)=>hotel.location,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotels:hotel[];
    

   
    @OneToMany(()=>location_translations, (location_translations: location_translations)=>location_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    locationTranslationss:location_translations[];
    
}
