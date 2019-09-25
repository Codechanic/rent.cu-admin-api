import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {acommodationtype_translations} from "./acommodationtype_translations";
import {homestay} from "./homestay";


@Entity("acommodationtype" ,{schema:"havanacity_db" } )
@Index("UNIQ_198CAD195E237E06",["name",],{unique:true})
export class acommodationtype {

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
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"partial"
        })
    partial:boolean;
        

   
    @OneToMany(()=>acommodationtype_translations, (acommodationtype_translations: acommodationtype_translations)=>acommodationtype_translations.object,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    acommodationtypeTranslationss:acommodationtype_translations[];
    

   
    @OneToMany(()=>homestay, (homestay: homestay)=>homestay.acommodation,{ onDelete: 'SET NULL' ,onUpdate: 'RESTRICT' })
    homestays:homestay[];
    
}
