import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tour_collective_type} from "./tour_collective_type";
import {collectivetour_translations} from "./collectivetour_translations";
import {tour_collective_translations} from "./tour_collective_translations";


@Entity("tour_collective" ,{schema:"havanacity_db" } )
@Index("IDX_1643033DC54C8C93",["type",])
export class tour_collective {

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
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"sun"
        })
    sun:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"mon"
        })
    mon:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"tue"
        })
    tue:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"wed"
        })
    wed:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"thu"
        })
    thu:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"fri"
        })
    fri:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"sat"
        })
    sat:boolean | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"going"
        })
    going:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"time"
        })
    time:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"paxprice"
        })
    paxprice:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"childprice"
        })
    childprice:number | null;
        

   
    @ManyToOne(()=>tour_collective_type, (tour_collective_type: tour_collective_type)=>tour_collective_type.tourCollectives,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'type_id'})
    type:tour_collective_type | null;


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
        

   
    @OneToMany(()=>collectivetour_translations, (collectivetour_translations: collectivetour_translations)=>collectivetour_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    collectivetourTranslationss:collectivetour_translations[];
    

   
    @OneToMany(()=>tour_collective_translations, (tour_collective_translations: tour_collective_translations)=>tour_collective_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    tourCollectiveTranslationss:tour_collective_translations[];
    
}
