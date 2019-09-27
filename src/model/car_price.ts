import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {season} from "./season";
import {rental} from "./rental";
import {carcategory} from "./carcategory";


@Entity("car_price" ,{schema:"havanacity_db" } )
@Index("IDX_1563A70E4EC001D1",["season",])
@Index("IDX_1563A70EA7CF2329",["rental",])
@Index("IDX_1563A70E12469DE2",["category",])
export class car_price {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>season, (season: season)=>season.carPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'season_id'})
    season:season | null;


   
    @ManyToOne(()=>rental, (rental: rental)=>rental.carPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'rental_id'})
    rental:rental | null;


   
    @ManyToOne(()=>carcategory, (carcategory: carcategory)=>carcategory.carPrices,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'category_id'})
    category:carcategory | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"price"
        })
    price:number;
        
}
