import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("currency" ,{schema:"havanacity_db" } )
export class currency {

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
        

    @Column("varchar",{ 
        nullable:false,
        name:"currency"
        })
    currency:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"canje"
        })
    canje:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"default_currency"
        })
    default_currency:boolean;
        
}
