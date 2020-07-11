import {Request,Response} from 'express'

import {getRepository} from 'typeorm'

import Playlist from '../entities/Playlist'
import UserPlaylist from '../entities/UserPlaylist'


class PlaylistController {
    async create(request:Request,response:Response){
        const playlistRepository = getRepository(Playlist)
        const userPlaylistRepository = getRepository(UserPlaylist)

        const createdPlaylist = playlistRepository.create({
            name:"Sertanejo 2020",category_id:3,
            public:true,playlist_thumbnail:'default-user-image.svg', 
        })

        await playlistRepository.save(createdPlaylist)

        const createRelation = userPlaylistRepository.create({
            playlistId:createdPlaylist.id,
            userId:1,
        })

        await userPlaylistRepository.save(createRelation)

        return response.status(200).json(createdPlaylist)

    }

    async index(request:Request,response:Response){
        const playlistRepository = getRepository(Playlist)

        const playlists = await playlistRepository.find({relations:["musics","users"]})

        return response.status(200).json(playlists)

    }

    async add(request:Request,response:Response){

        const userPlaylistRepository = getRepository(UserPlaylist)

        const musicAdded = userPlaylistRepository.create({
            playlistId:1,

        })


    }


}

export default new PlaylistController()