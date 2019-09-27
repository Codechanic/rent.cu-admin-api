import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {municipality} from "./municipality";
import {place_translations} from "./place_translations";
import {homestay} from "./homestay";
import {hotel} from "./hotel";


@Entity("place" ,{schema:"havanacity_db" } )
@Index("IDX_741D53CDAE6F181C",["municipality",])
export class place {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

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
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"latitude"
        })
    latitude:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"longitude"
        })
    longitude:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

   
    @ManyToOne(()=>municipality, (municipality: municipality)=>municipality.places,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'municipality_id'})
    municipality:municipality | null;


    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phones"
        })
    phones:string | null;
        

   
    @OneToMany(()=>place_translations, (place_translations: place_translations)=>place_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    placeTranslationss:place_translations[];
    

   
    @ManyToMany(()=>homestay, (homestay: homestay)=>homestay.places)
    homestays:homestay[];
    

   
    @ManyToMany(()=>hotel, (hotel: hotel)=>hotel.places)
    hotels:hotel[];
    
}
