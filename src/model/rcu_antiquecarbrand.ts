import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rcu_antiquecar} from "./rcu_antiquecar";


@Entity("rcu_antiquecarbrand" ,{schema:"havanacity_db" } )
@Index("UNIQ_A8A4B7905E237E06",["name",],{unique:true})
export class rcu_antiquecarbrand {

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
        

   
    @OneToMany(()=>rcu_antiquecar, (rcu_antiquecar: rcu_antiquecar)=>rcu_antiquecar.carbrand,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuAntiquecars:rcu_antiquecar[];
    
}
