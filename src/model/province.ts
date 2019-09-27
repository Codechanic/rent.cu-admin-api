import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {municipality} from "./municipality";
import {province_translations} from "./province_translations";


@Entity("province" ,{schema:"havanacity_db" } )
@Index("UNIQ_4ADAD40B5E237E06",["name",],{unique:true})
export class province {

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
        

    @Column("int",{ 
        nullable:true,
        name:"norder"
        })
    norder:number | null;
        

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
        

   
    @OneToMany(()=>municipality, (municipality: municipality)=>municipality.province,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    municipalitys:municipality[];
    

   
    @OneToMany(()=>province_translations, (province_translations: province_translations)=>province_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    provinceTranslationss:province_translations[];
    
}
