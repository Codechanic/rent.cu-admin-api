import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_notoffered_translation} from "./hotel_notoffered_translation";
import {hotel} from "./hotel";


@Entity("hotel_notoffered" ,{schema:"havanacity_db" } )
@Index("UNIQ_4E49B44D5E237E06",["name",],{unique:true})
export class hotel_notoffered {

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
        

   
    @OneToMany(()=>hotel_notoffered_translation, (hotel_notoffered_translation: hotel_notoffered_translation)=>hotel_notoffered_translation.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelNotofferedTranslations:hotel_notoffered_translation[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.hotelNotoffereds)
    hotels:hotel[];
    
}
