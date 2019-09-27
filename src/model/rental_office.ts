import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rental} from "./rental";
import {destination} from "./destination";
import {rental_office_translations} from "./rental_office_translations";


@Entity("rental_office" ,{schema:"havanacity_db" } )
@Index("IDX_447F7F65A7CF2329",["rental",])
@Index("IDX_447F7F65816C6140",["destination",])
export class rental_office {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>rental, (rental: rental)=>rental.rentalOffices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'rental_id'})
    rental:rental | null;


   
    @ManyToOne(()=>destination, (destination: destination)=>destination.rentalOffices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'destination_id'})
    destination:destination | null;


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
        

   
    @OneToMany(()=>rental_office_translations, (rental_office_translations: rental_office_translations)=>rental_office_translations.object,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    rentalOfficeTranslationss:rental_office_translations[];
    
}
