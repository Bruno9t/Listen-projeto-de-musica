import {Request,Response} from 'express'

import {getRepository} from 'typeorm'
import Playlist from '../entities/Playlist'


class PlaylistController {
    async create(request:Request,response:Response){
        const playlistRepository = getRepository(Playlist)

        const createdPlaylist = playlistRepository.create({
            name:"Segunda do ano",category_id:1,
            public:true,playlist_thumbnail:'default-user-image.svg', 
        })

        await playlistRepository.save(createdPlaylist)

        return response.status(200).json(createdPlaylist)

    }

    async index(request:Request,response:Response){
        const playlistRepository = getRepository(Playlist)

        const playlists = await playlistRepository.find({relations:["musics"]})

        return response.status(200).json(playlists)

    }


}

export default new PlaylistController()