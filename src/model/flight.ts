import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {flight_chain} from "./flight_chain";
import {transferplace} from "./transferplace";
import {flight_price} from "./flight_price";
import {flight_translations} from "./flight_translations";


@Entity("flight" ,{schema:"havanacity_db" } )
@Index("IDX_C257E60E966C2F62",["chain",])
@Index("IDX_C257E60E78CED90B",["from",])
@Index("IDX_C257E60E30354A65",["to",])
export class flight {

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
        nullable:true,
        name:"airline"
        })
    airline:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"sun"
        })
    sun:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"mon"
        })
    mon:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"tue"
        })
    tue:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"wed"
        })
    wed:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"thu"
        })
    thu:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"fri"
        })
    fri:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"sat"
        })
    sat:boolean | null;
        

   
    @ManyToOne(()=>flight_chain, (flight_chain: flight_chain)=>flight_chain.flights,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'chain_id'})
    chain:flight_chain | null;


   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.flights2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'from_id'})
    from:transferplace | null;


   
    @ManyToOne(()=>transferplace, (transferplace: transferplace)=>transferplace.flights,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'to_id'})
    to:transferplace | null;


   
    @OneToMany(()=>flight_price, (flight_price: flight_price)=>flight_price.flight,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flightPrices:flight_price[];
    

   
    @OneToMany(()=>flight_translations, (flight_translations: flight_translations)=>flight_translations.object,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    flightTranslationss:flight_translations[];
    
}
