import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rentaloffice} from "./rentaloffice";
import {rentalplace_translations} from "./rentalplace_translations";
import {rental} from "./rental";


@Entity("rentalplace" ,{schema:"havanacity_db" } )
@Index("UNIQ_A6747C165E237E06",["name",],{unique:true})
export class rentalplace {

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
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"airport"
        })
    airport:boolean;
        

   
    @OneToMany(()=>rentaloffice, (rentaloffice: rentaloffice)=>rentaloffice.place,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentaloffices:rentaloffice[];
    

   
    @OneToMany(()=>rentalplace_translations, (rentalplace_translations: rentalplace_translations)=>rentalplace_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentalplaceTranslationss:rentalplace_translations[];
    

   
    @ManyToMany(()=>rental, (rental: rental)=>rental.rentalplaces)
    rentals:rental[];
    
}
