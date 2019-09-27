import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_extracost_translations} from "./hotel_extracost_translations";
import {hotel} from "./hotel";


@Entity("hotel_extracost" ,{schema:"havanacity_db" } )
@Index("UNIQ_F2FC664D5E237E06",["name",],{unique:true})
export class hotel_extracost {

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
        

   
    @OneToMany(()=>hotel_extracost_translations, (hotel_extracost_translations: hotel_extracost_translations)=>hotel_extracost_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelExtracostTranslationss:hotel_extracost_translations[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.hotelExtracosts)
    hotels:hotel[];
    
}
