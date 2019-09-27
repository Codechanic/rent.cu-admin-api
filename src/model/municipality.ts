import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {province} from "./province";
import {homestay} from "./homestay";
import {hotel} from "./hotel";
import {municipality_translations} from "./municipality_translations";
import {place} from "./place";
import {rcu_antiquecar} from "./rcu_antiquecar";


@Entity("municipality" ,{schema:"havanacity_db" } )
@Index("UNIQ_C6F566285E237E06",["name",],{unique:true})
@Index("IDX_C6F56628E946114A",["province",])
export class municipality {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>province, (province: province)=>province.municipalitys,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'province_id'})
    province:province | null;


    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_title"
        })
    meta_title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_description"
        })
    meta_description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_keywords"
        })
    meta_keywords:string | null;
        

   
    @OneToMany(()=>homestay, (homestay: homestay)=>homestay.municipality,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homestays:homestay[];
    

   
    @OneToMany(()=>hotel, (hotel: hotel)=>hotel.municipality,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    hotels:hotel[];
    

   
    @OneToMany(()=>municipality_translations, (municipality_translations: municipality_translations)=>municipality_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    municipalityTranslationss:municipality_translations[];
    

   
    @OneToMany(()=>place, (place: place)=>place.municipality,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    places:place[];
    

   
    @OneToMany(()=>rcu_antiquecar, (rcu_antiquecar: rcu_antiquecar)=>rcu_antiquecar.municipality,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuAntiquecars:rcu_antiquecar[];
    
}
