import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transferplace} from "./transferplace";


@Entity("transfer_collective" ,{schema:"havanacity_db" } )
@Index("IDX_2A522B4B78CED90B",["from",])
@Index("IDX_2A522B4B30354A65",["to",])
export class transfer_collective {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        

   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.transferCollectives2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'from_id'})
    from:transferplace | null;


   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.transferCollectives,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'to_id'})
    to:transferplace | null;

}
