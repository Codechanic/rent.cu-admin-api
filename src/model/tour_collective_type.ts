import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tour_collective} from "./tour_collective";
import {tour_collective_type_translations} from "./tour_collective_type_translations";


@Entity("tour_collective_type" ,{schema:"havanacity_db" } )
export class tour_collective_type {

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
        

   
    @OneToMany(()=>tour_collective, (tour_collective: tour_collective)=>tour_collective.type,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    tourCollectives:tour_collective[];
    

   
    @OneToMany(()=>tour_collective_type_translations, (tour_collective_type_translations: tour_collective_type_translations)=>tour_collective_type_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    tourCollectiveTypeTranslationss:tour_collective_type_translations[];
    
}
