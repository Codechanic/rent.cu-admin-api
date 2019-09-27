import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rcu_visit" ,{schema:"havanacity_db" } )
@Index("UNIQ_A0EC032FF47645AEA5E3B32D",["url","ip",],{unique:true})
export class rcu_visit {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"entity_class"
        })
    entity_class:string;
        

    @Column("int",{ 
        nullable:false,
        name:"entity_id"
        })
    entity_id:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"update_date"
        })
    update_date:Date;
        

    @Column("varchar",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"ip"
        })
    ip:string;
        

    @Column("int",{ 
        nullable:false,
        name:"count"
        })
    count:number;
        
}
