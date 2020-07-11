import {Entity,PrimaryGeneratedColumn,CreateDateColumn,Column,ManyToOne,ManyToMany,JoinTable,JoinColumn} from 'typeorm'
import Category from './Category'
import Playlist from './Playlist'
import User from './User'


@Entity("music")
class Music {
    
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    category_id!:number;

    @ManyToOne(()=>Category)
    @JoinColumn({name:"category_id",referencedColumnName:"id"})
    category!:Category;

    @ManyToMany(()=> Playlist,playlist=>playlist.musics)
    playlists!:Playlist[];

    @ManyToMany(()=> User,user=>user.musics)
    users!:User[];

    @Column()
    name!:string;

    @Column()
    duration!:number;

    @Column()
    artist!:string;

    @Column()
    music_file!:string;

    @Column()
    music_thumbnail!:string;

    @Column()
    public!:boolean;

    @CreateDateColumn()
    created_at!:Date;

    @CreateDateColumn()
    updated_at!:Date;

}

export default Music