import {Entity,PrimaryGeneratedColumn,CreateDateColumn,Column,ManyToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm'

import Category from '../entities/Category'
import Music from '../entities/Music'


@Entity('playlist')
class Playlist {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    category_id!:number;

    @ManyToOne(()=>Category)
    @JoinColumn({name:"category_id",referencedColumnName:"id"})
    category!:Category;

    @ManyToMany(()=> Music)
    @JoinTable()
    musics!:Category[];

    @Column()
    name!:string;

    @Column()
    playlist_thumbnail!:string;

    @Column()
    public!:boolean;

    @CreateDateColumn()
    created_at!:Date;

    @CreateDateColumn()
    updated_at!:Date;

}

export default Playlist