import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {car_price} from "./car_price";
import {rental_office} from "./rental_office";
import {rental_translations} from "./rental_translations";
import {rentaloffice} from "./rentaloffice";
import {car} from "./car";
import {carcategory} from "./carcategory";
import {rentalplace} from "./rentalplace";
import {season} from "./season";


@Entity("rental" ,{schema:"havanacity_db" } )
@Index("UNIQ_1619C27D5E237E06",["name",],{unique:true})
export class rental {

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"extradayhours"
        })
    extradayhours:number | null;
        

   
    @OneToMany(()=>car_price, (car_price: car_price)=>car_price.rental,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    carPrices:car_price[];
    

   
    @OneToMany(()=>rental_office, (rental_office: rental_office)=>rental_office.rental,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentalOffices:rental_office[];
    

   
    @OneToMany(()=>rental_translations, (rental_translations: rental_translations)=>rental_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentalTranslationss:rental_translations[];
    

   
    @OneToMany(()=>rentaloffice, (rentaloffice: rentaloffice)=>rentaloffice.rental,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentaloffices:rentaloffice[];
    

   
    @ManyToMany(()=>car, (car: car)=>car.rentals)
    cars:car[];
    

   
    @ManyToMany(()=>carcategory, (carcategory: carcategory)=>carcategory.rentals,{  nullable:false, })
    @JoinTable({ name:'rental_category'})
    carcategorys:carcategory[];
    

   
    @ManyToMany(()=>rentalplace, (rentalplace: rentalplace)=>rentalplace.rentals,{  nullable:false, })
    @JoinTable({ name:'rental_rentalplace'})
    rentalplaces:rentalplace[];
    

   
    @ManyToMany(()=>season, (season: season)=>season.rentals,{  nullable:false, })
    @JoinTable({ name:'rental_season'})
    seasons:season[];
    
}
