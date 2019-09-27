import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gallery_image" ,{schema:"havanacity_db" } )
export class gallery_image {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"path"
        })
    path:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"owner"
        })
    owner:string;
        
}
