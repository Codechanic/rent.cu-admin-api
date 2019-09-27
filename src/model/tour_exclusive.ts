import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tour_exclusive_translations} from "./tour_exclusive_translations";


@Entity("tour_exclusive" ,{schema:"havanacity_db" } )
export class tour_exclusive {

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
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax1"
        })
    pax1:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax2"
        })
    pax2:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax3"
        })
    pax3:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax4"
        })
    pax4:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax5"
        })
    pax5:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax6to10"
        })
    pax6to10:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"pax11to15"
        })
    pax11to15:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"showhome"
        })
    showhome:boolean | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"slug"
        })
    slug:string;
        

   
    @OneToMany(()=>tour_exclusive_translations, (tour_exclusive_translations: tour_exclusive_translations)=>tour_exclusive_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    tourExclusiveTranslationss:tour_exclusive_translations[];
    
}
