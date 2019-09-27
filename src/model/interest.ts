import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {interest_translations} from "./interest_translations";
import {homestay} from "./homestay";
import {hotel} from "./hotel";


@Entity("interest" ,{schema:"havanacity_db" } )
@Index("UNIQ_6C3E1A675E237E06",["name",],{unique:true})
export class interest {

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
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

   
    @OneToMany(()=>interest_translations, (interest_translations: interest_translations)=>interest_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    interestTranslationss:interest_translations[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.interests)
    homestays:homestay[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.interests)
    hotels:hotel[];
    
}
