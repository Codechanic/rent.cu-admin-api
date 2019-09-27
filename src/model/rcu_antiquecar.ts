import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {municipality} from "./municipality";
import {rcu_antiquecarbrand} from "./rcu_antiquecarbrand";
import {rcu_antiquecarbrand_translations} from "./rcu_antiquecarbrand_translations";


@Entity("rcu_antiquecar" ,{schema:"havanacity_db" } )
@Index("UNIQ_D7544DF8989D9B62",["slug",],{unique:true})
@Index("UNIQ_D7544DF8E7927C74",["email",],{unique:true})
@Index("IDX_D7544DF8AE6F181C",["municipality",])
@Index("IDX_D7544DF86316CAA9",["carbrand",])
export class rcu_antiquecar {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>municipality, (municipality: municipality)=>municipality.rcuAntiquecars,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'municipality_id'})
    municipality:municipality | null;


   
    @ManyToOne(()=>rcu_antiquecarbrand, (rcu_antiquecarbrand: rcu_antiquecarbrand)=>rcu_antiquecarbrand.rcuAntiquecars,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'carbrand_id'})
    carbrand:rcu_antiquecarbrand | null;


    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"slug"
        })
    slug:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"owner"
        })
    owner:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"hardcover"
        })
    hardcover:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"convertible"
        })
    convertible:boolean;
        

    @Column("int",{ 
        nullable:false,
        name:"year"
        })
    year:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"color"
        })
    color:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"pricehour"
        })
    pricehour:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price8hour"
        })
    price8hour:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phones"
        })
    phones:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"email"
        })
    email:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"rank"
        })
    rank:number;
        

   
    @OneToMany(()=>rcu_antiquecarbrand_translations, (rcu_antiquecarbrand_translations: rcu_antiquecarbrand_translations)=>rcu_antiquecarbrand_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuAntiquecarbrandTranslationss:rcu_antiquecarbrand_translations[];
    
}
