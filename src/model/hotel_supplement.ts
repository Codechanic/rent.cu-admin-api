import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotel} from "./hotel";
import {hotel_chain} from "./hotel_chain";


@Entity("hotel_supplement" ,{schema:"havanacity_db" } )
@Index("IDX_748E99243243BB18",["hotel",])
@Index("IDX_748E9924966C2F62",["chain",])
export class hotel_supplement {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"start"
        })
    start:string;
        

    @Column("date",{ 
        nullable:false,
        name:"end"
        })
    end:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"value"
        })
    value:number;
        

   
    @ManyToOne(()=>hotel, (hotel: hotel)=>hotel.hotelSupplements,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'hotel_id'})
    hotel:hotel | null;


   
    @ManyToOne(()=>hotel_chain, (hotel_chain: hotel_chain)=>hotel_chain.hotelSupplements,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'chain_id'})
    chain:hotel_chain | null;

}
