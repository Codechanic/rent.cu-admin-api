import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {car} from "./car";
import {program} from "./program";
import {program_price} from "./program_price";


@Entity("program_offer" ,{schema:"havanacity_db" } )
@Index("IDX_B7BFF4C8C3C6F69F",["car",])
@Index("IDX_B7BFF4C83EB8070A",["program",])
export class program_offer {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>car, (car: car)=>car.programOffers,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'car_id'})
    car:car | null;


   
    @ManyToOne(()=>program, (program: program)=>program.programOffers,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'program_id'})
    program:program | null;


    @Column("int",{ 
        nullable:false,
        name:"roomcount"
        })
    roomcount:number;
        

   
    @OneToMany(()=>program_price, (program_price: program_price)=>program_price.offer,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    programPrices:program_price[];
    
}
