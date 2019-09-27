import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {destination_translations} from "./destination_translations";
import {rental_office} from "./rental_office";


@Entity("destination" ,{schema:"havanacity_db" } )
@Index("IDX_3EC63EAA727ACA70",["parent",])
export class destination {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>destination, (destination: destination)=>destination.destinations,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'parent_id'})
    parent:destination | null;


    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"latitude"
        })
    latitude:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"longitude"
        })
    longitude:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_title"
        })
    meta_title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_description"
        })
    meta_description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_keywords"
        })
    meta_keywords:string | null;
        

   
    @OneToMany(()=>destination, (destination: destination)=>destination.parent,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    destinations:destination[];
    

   
    @OneToMany(()=>destination_translations, (destination_translations: destination_translations)=>destination_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    destinationTranslationss:destination_translations[];
    

   
    @OneToMany(()=>rental_office, (rental_office: rental_office)=>rental_office.destination,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rentalOffices:rental_office[];
    
}
