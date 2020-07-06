import {Entity,PrimaryGeneratedColumn,CreateDateColumn,Column} from 'typeorm'


@Entity('category')
class Category {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:"varchar",length:30,nullable:false})
    name!:string;

    @CreateDateColumn()
    created_at!:Date;

    @CreateDateColumn()
    updated_at!:Date;

}

export default Category