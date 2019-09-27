import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rental_office} from "./rental_office";


@Entity("rental_office_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_2365CE09232D562B",["object",])
export class rental_office_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>rental_office, (rental_office: rental_office)=>rental_office.rentalOfficeTranslationss,{ onDelete: 'CASCADE',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:rental_office | null;


    @Column("varchar",{ 
        nullable:false,
        length:8,
        name:"locale"
        })
    locale:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:32,
        name:"field"
        })
    field:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        
}
