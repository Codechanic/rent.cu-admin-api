import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay_extracost} from "./homestay_extracost";


@Entity("homestay_extracost_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object","field",],{unique:true})
@Index("IDX_75B6CC74232D562B",["object",])
export class homestay_extracost_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>homestay_extracost, (homestay_extracost: homestay_extracost)=>homestay_extracost.homestayExtracostTranslationss,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'object_id'})
    object:homestay_extracost | null;


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
