import {Request,Response} from 'express'
import {getRepository} from 'typeorm'

import User from '../entities/User'
import bcrypt from 'bcrypt'

class UserController {
    async create(request:Request,response:Response){

    try{

        const {
            name,
            surname,
            username,
            email,
            password,
        } = request.body

    

        const userRepository = getRepository(User)

        const createdUser =  userRepository.create({
            name,surname,username,email,password,
            user_thumbnail:"default-user-image.svg"
        })

        await userRepository.save(createdUser)

        return response.status(200).json(createdUser)
    }catch(err){
        console.log(err)
        return response.status(401).json({message:'Ocorreu algum erro ao criar sua conta!'})
    }

    }

    store(request:Request,response:Response){

        return response.status(200).json({message:'You are logged'})
    }

    async index(request:Request,resonse:Response){

        const userRepository = getRepository(User)

        const users = await userRepository.find({relations:["musics","playlists"]})

        return resonse.status(200).json(users)
        
    }
}


export default new UserController()