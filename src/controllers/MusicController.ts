import {Request,Response} from 'express'

import {getRepository} from 'typeorm'

import Music from '../entities/Music'

class MusicController {
    async create(request:Request,response:Response){

        const {

            name,
            category_id,
            user_id,
            duration,
            artist,
            music_file,
            music_thumbnail,
            isPublic
            
        } = request.body
        
        const musicRepository = getRepository(Music)

        const musicCreated = musicRepository.create({
            name,
            category_id,
            user_id,
            duration,
            artist,
            music_file,
            music_thumbnail,
            public:isPublic
        })

        await musicRepository.save(musicCreated)

        return response.json(musicCreated)

    }

    async index(request:Request,response:Response){
        const musicRepository = getRepository(Music)

        const musics = await musicRepository.find({relations:[
            "category","add_by_user","playlists","users"
        ]})

        return response.json(musics)

    }
}

export default new MusicController()

