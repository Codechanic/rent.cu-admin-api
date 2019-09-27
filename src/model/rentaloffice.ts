import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rental} from "./rental";
import {rentalplace} from "./rentalplace";
import {rentaloffice_translations} from "./rentaloffice_translations";


@Entity("rentaloffice" ,{schema:"havanacity_db" } )
@Index("IDX_65820971A7CF2329",["rental",])
@Index("IDX_65820971DA6A219",["place",])
export class rentaloffice {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>rental, (rental: rental)=>rental.rentaloffices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'rental_id'})
    rental:rental | null;


   
    @ManyToOne(()=>rentalplace, (rentalplace: rentalplace)=>rentalplace.rentaloffices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'place_id'})
    place:rentalplace | null;


    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phones"
        })
    phones:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"open"
        })
    open:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"close"
        })
    close:string | null;
        

   
    @OneToMany(()=>rentaloffice_translations, (rentaloffice_translations: rentaloffice_translations)=>rentaloffice_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentalofficeTranslationss:rentaloffice_translations[];
    
}
