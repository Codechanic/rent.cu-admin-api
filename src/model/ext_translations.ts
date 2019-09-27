import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ext_translations" ,{schema:"havanacity_db" } )
@Index("lookup_unique_idx",["locale","object_class","field","foreign_key",],{unique:true})
@Index("translations_lookup_idx",["locale","object_class","foreign_key",])
export class ext_translations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:8,
        name:"locale"
        })
    locale:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"object_class"
        })
    object_class:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:32,
        name:"field"
        })
    field:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        name:"foreign_key"
        })
    foreign_key:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        
}
