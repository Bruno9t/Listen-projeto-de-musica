import {Entity,PrimaryGeneratedColumn,CreateDateColumn,Column,ManyToOne, OneToMany,JoinColumn, ManyToMany, JoinTable} from 'typeorm'

import Category from './Category'
import Music from './Music'
import User from './User'


@Entity('playlist')
class Playlist {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    category_id!:number;

    @ManyToOne(()=>Category)
    @JoinColumn({name:"category_id",referencedColumnName:"id"})
    category!:Category;

    @ManyToMany(()=> Music,music=>music.playlists)
    @JoinTable()
    musics!:Music[];

    @ManyToMany(()=>User,user=>user.playlists)
    @JoinTable()
    users!:User[]

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