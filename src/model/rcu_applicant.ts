import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rcu_applicant" ,{schema:"havanacity_db" } )
export class rcu_applicant {

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
        name:"email"
        })
    email:string;
        

    @Column("longtext",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        
}
