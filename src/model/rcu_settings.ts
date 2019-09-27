import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rcu_settings_translations} from "./rcu_settings_translations";


@Entity("rcu_settings" ,{schema:"havanacity_db" } )
export class rcu_settings {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"facebook"
        })
    facebook:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"twitter"
        })
    twitter:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"tripadvisor"
        })
    tripadvisor:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"googleplus"
        })
    googleplus:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"phones"
        })
    phones:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"contactdescription"
        })
    contactdescription:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"aboutus"
        })
    aboutus:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"domain"
        })
    domain:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"offline"
        })
    offline:boolean | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"exchangecuc"
        })
    exchangecuc:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_title"
        })
    meta_title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_description"
        })
    meta_description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"meta_keywords"
        })
    meta_keywords:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"adminemail"
        })
    adminemail:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"policies"
        })
    policies:string | null;
        

   
    @OneToMany(()=>rcu_settings_translations, (rcu_settings_translations: rcu_settings_translations)=>rcu_settings_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rcuSettingsTranslationss:rcu_settings_translations[];
    
}
