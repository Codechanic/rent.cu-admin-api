import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {reservation} from "./reservation";


@Entity("reservationitems" ,{schema:"havanacity_db" } )
@Index("IDX_AA02543EB83297E7",["reservation",])
export class reservationitems {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>reservation, (reservation: reservation)=>reservation.reservationitemss,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'reservation_id'})
    reservation:reservation | null;


    @Column("varchar",{ 
        nullable:false,
        name:"type"
        })
    type:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"code"
        })
    code:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        

    @Column("int",{ 
        nullable:false,
        name:"status"
        })
    status:number;
        

    @Column("longtext",{ 
        nullable:false,
        name:"html"
        })
    html:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"price_detail"
        })
    price_detail:string;
        
}
