import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay_freeservice_translations} from "./homestay_freeservice_translations";
import {homestay} from "./homestay";


@Entity("homestay_freeservices" ,{schema:"havanacity_db" } )
@Index("UNIQ_F0A6CA7A5E237E06",["name",],{unique:true})
export class homestay_freeservices {

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
        

   
    @OneToMany(()=>homestay_freeservice_translations, (homestay_freeservice_translations: homestay_freeservice_translations)=>homestay_freeservice_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayFreeserviceTranslationss:homestay_freeservice_translations[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.homestayFreeservicess)
    homestays:homestay[];
    
}
