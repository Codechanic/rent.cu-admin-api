import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rcu_subscriber" ,{schema:"havanacity_db" } )
@Index("UNIQ_70A654A6E7927C74",["email",],{unique:true})
export class rcu_subscriber {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"email"
        })
    email:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"locked"
        })
    locked:boolean;
        
}
