import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {carbrand} from "./carbrand";
import {program_offer} from "./program_offer";
import {rental} from "./rental";


@Entity("car" ,{schema:"havanacity_db" } )
@Index("UNIQ_773DE69D5E237E06",["name",],{unique:true})
@Index("IDX_773DE69D6316CAA9",["carbrand",])
export class car {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>carbrand, (carbrand: carbrand)=>carbrand.cars,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'carbrand_id'})
    carbrand:carbrand | null;


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
        nullable:false,
        name:"tank"
        })
    tank:number;
        

    @Column("int",{ 
        nullable:false,
        name:"doors"
        })
    doors:number;
        

    @Column("int",{ 
        nullable:false,
        name:"capacity"
        })
    capacity:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"transmition"
        })
    transmition:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"airbag"
        })
    airbag:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"km"
        })
    km:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

   
    @OneToMany(()=>program_offer, (program_offer: program_offer)=>program_offer.car,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programOffers:program_offer[];
    

   
    @ManyToMany(()=>rental, (rental: rental)=>rental.cars,{  nullable:false, })
    @JoinTable({ name:'car_rental'})
    rentals:rental[];
    
}
