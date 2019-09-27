import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel} from "./hotel";
import {hotel_roomtype} from "./hotel_roomtype";
import {hotel_price} from "./hotel_price";
import {hotelroom_translations} from "./hotelroom_translations";
import {hotelroomfacility} from "./hotelroomfacility";


@Entity("hotelroom" ,{schema:"havanacity_db" } )
@Index("IDX_477EFB1F3243BB18",["hotel",])
@Index("IDX_477EFB1F7D31ADD1",["roomtype",])
export class hotelroom {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>hotel, (hotel: hotel)=>hotel.hotelrooms,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'hotel_id'})
    hotel:hotel | null;


   
    @ManyToOne(()=>hotel_roomtype, (hotel_roomtype: hotel_roomtype)=>hotel_roomtype.hotelrooms,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'roomtype_id'})
    roomtype:hotel_roomtype | null;


    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"capacity"
        })
    capacity:number;
        

    @Column("int",{ 
        nullable:false,
        name:"maxchild"
        })
    maxchild:number;
        

    @Column("int",{ 
        nullable:false,
        name:"minadult"
        })
    minadult:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

   
    @OneToMany(()=>hotel_price, (hotel_price: hotel_price)=>hotel_price.hotelroom,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelPrices:hotel_price[];
    

   
    @OneToMany(()=>hotelroom_translations, (hotelroom_translations: hotelroom_translations)=>hotelroom_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelroomTranslationss:hotelroom_translations[];
    

   
    @ManyToMany(()=>hotelroomfacility, (hotelroomfacility: hotelroomfacility)=>hotelroomfacility.hotelrooms,{  nullable:false, })
    @JoinTable({ name:'hotelroom_hotelroomfacility'})
    hotelroomfacilitys:hotelroomfacility[];
    
}
