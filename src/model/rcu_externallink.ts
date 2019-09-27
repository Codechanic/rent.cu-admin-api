import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rcu_externallink_translations} from "./rcu_externallink_translations";


@Entity("rcu_externallink" ,{schema:"havanacity_db" } )
export class rcu_externallink {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"norder"
        })
    norder:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"inhc"
        })
    inhc:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"inrc"
        })
    inrc:boolean;
        

   
    @OneToMany(()=>rcu_externallink_translations, (rcu_externallink_translations: rcu_externallink_translations)=>rcu_externallink_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuExternallinkTranslationss:rcu_externallink_translations[];
    
}
