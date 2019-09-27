import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homestay} from "./homestay";
import {rcu_promo_translations} from "./rcu_promo_translations";


@Entity("rcu_promo" ,{schema:"havanacity_db" } )
@Index("IDX_538170EDF20D79E8",["homestay",])
export class rcu_promo {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>homestay, (homestay: homestay)=>homestay.rcuPromos,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'homestay_id'})
    homestay:homestay | null;


    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"showcount"
        })
    showcount:number;
        

    @Column("int",{ 
        nullable:false,
        name:"showoffset"
        })
    showoffset:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        name:"from_date"
        })
    from_date:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"to_date"
        })
    to_date:Date;
        

    @Column("varchar",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"promo_type"
        })
    promo_type:string;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"discount"
        })
    discount:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"price"
        })
    price:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"isnew"
        })
    isnew:boolean | null;
        

   
    @OneToMany(()=>rcu_promo_translations, (rcu_promo_translations: rcu_promo_translations)=>rcu_promo_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuPromoTranslationss:rcu_promo_translations[];
    
}
