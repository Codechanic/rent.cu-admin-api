import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay_extracost_translations} from "./homestay_extracost_translations";
import {homestay} from "./homestay";


@Entity("homestay_extracost" ,{schema:"havanacity_db" } )
@Index("UNIQ_5B2CEB055E237E06",["name",],{unique:true})
export class homestay_extracost {

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
        

   
    @OneToMany(()=>homestay_extracost_translations, (homestay_extracost_translations: homestay_extracost_translations)=>homestay_extracost_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestayExtracostTranslationss:homestay_extracost_translations[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.homestayExtracosts)
    homestays:homestay[];
    
}
