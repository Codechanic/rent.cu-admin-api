import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('gallery_image', { schema: 'havanacity_db_dev' })
export class Image {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'path',
  })
  path: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'owner',
  })
  owner: string;

}
