import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {car} from "./car";


@Entity("carbrand" ,{schema:"havanacity_db" } )
@Index("UNIQ_8A1D9DEF5E237E06",["name",],{unique:true})
export class carbrand {

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
        

   
    @OneToMany(()=>car, (car: car)=>car.carbrand,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cars:car[];
    
}
