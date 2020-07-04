import {Entity, PrimaryGeneratedColumn,CreateDateColumn,Column} from "typeorm";

@Entity('user')
class User {

    @PrimaryGeneratedColumn({type:"int",unsigned:true})
    id!: number;

    @Column({type:"varchar",length:30,nullable:false})
    name!: string;

    @Column({type:"varchar",length:30})
    surname!: string;

    @Column({type:"varchar",length:30,unique:true})
    username?: string;

    @Column({type:"varchar",length:40,unique:true,nullable:false})
    email!:string;

    @Column("varchar")
    password!:string;

    @Column({type:"varchar",length:40,unique:true})
    user_thumbnail?:string;

    @CreateDateColumn({type:"timestamp"})
    created_at!:Date;

    @CreateDateColumn({type:"timestamp"})
    updated_at!:Date;

}

export default User