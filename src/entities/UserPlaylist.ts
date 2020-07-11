import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn} from 'typeorm'


@Entity('user_playlists_playlist')
class UserPlaylist {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    userId!:number;

    @Column()
    playlistId!:number;

    @CreateDateColumn()
    created_at!:Date;

    @CreateDateColumn()
    updated_at!:Date;
}


export default UserPlaylist
