import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hotelroom} from "./hotelroom";


@Entity("hotelroom_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_EAB6E4F7232D562B",["object",])
export class hotelroom_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>hotelroom, (hotelroom: hotelroom)=>hotelroom.hotelroomTranslationss,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:hotelroom | null;


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
