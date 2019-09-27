import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_roomtype_translations} from "./hotel_roomtype_translations";
import {hotelroom} from "./hotelroom";
import {hotel} from "./hotel";


@Entity("hotel_roomtype" ,{schema:"havanacity_db" } )
export class hotel_roomtype {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"type"
        })
    type:string;
        

   
    @OneToMany(()=>hotel_roomtype_translations, (hotel_roomtype_translations: hotel_roomtype_translations)=>hotel_roomtype_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelRoomtypeTranslationss:hotel_roomtype_translations[];
    

   
    @OneToMany(()=>hotelroom, (hotelroom: hotelroom)=>hotelroom.roomtype,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelrooms:hotelroom[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.hotelRoomtypes)
    hotels:hotel[];
    
}
