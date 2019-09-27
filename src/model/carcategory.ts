import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {car_price} from "./car_price";
import {carcategory_translations} from "./carcategory_translations";
import {rental} from "./rental";


@Entity("carcategory" ,{schema:"havanacity_db" } )
@Index("UNIQ_21AF03605E237E06",["name",],{unique:true})
export class carcategory {

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
        

   
    @OneToMany(()=>car_price, (car_price: car_price)=>car_price.category,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    carPrices:car_price[];
    

   
    @OneToMany(()=>carcategory_translations, (carcategory_translations: carcategory_translations)=>carcategory_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    carcategoryTranslationss:carcategory_translations[];
    

   
    @ManyToMany(()=>rental, (rental: rental)=>rental.carcategorys)
    rentals:rental[];
    
}
