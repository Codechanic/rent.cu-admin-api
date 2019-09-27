import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel_plan_translations} from "./hotel_plan_translations";
import {hotel_price} from "./hotel_price";
import {hotel} from "./hotel";


@Entity("hotel_plan" ,{schema:"havanacity_db" } )
export class hotel_plan {

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
        

    @Column("varchar",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"private"
        })
    private:boolean;
        

   
    @OneToMany(()=>hotel_plan_translations, (hotel_plan_translations: hotel_plan_translations)=>hotel_plan_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelPlanTranslationss:hotel_plan_translations[];
    

   
    @OneToMany(()=>hotel_price, (hotel_price: hotel_price)=>hotel_price.hotelplan,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotelPrices:hotel_price[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.hotelPlans,{  nullable:false, })
    @JoinTable({ name:'hotels_plans'})
    hotels:hotel[];
    
}
