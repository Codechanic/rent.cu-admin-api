import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay_notoffered_translation} from "./homestay_notoffered_translation";
import {homestay} from "./homestay";


@Entity("homestay_notoffered" ,{schema:"havanacity_db" } )
@Index("UNIQ_36E7AD625E237E06",["name",],{unique:true})
export class homestay_notoffered {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(()=>homestay_notoffered_translation, (homestay_notoffered_translation: homestay_notoffered_translation)=>homestay_notoffered_translation.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayNotofferedTranslations:homestay_notoffered_translation[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.homestayNotoffereds)
    homestays:homestay[];
    
}
