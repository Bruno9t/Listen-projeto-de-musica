import 'dotenv/config'
import 'reflect-metadata'

import express from 'express'
import path from 'path'

import userRoutes from './routes/user'
import musicRoutes from './routes/music'

import dbConnection from './database'

dbConnection()
.then(status=>{
    console.log('Connected to database!')
})
.catch(err=>{
    console.log('Error to connect to database!')
})

const app = express()
const PORT = process.env.APP_PORT || '3131'

app.use(express.json())


app.use(userRoutes)
app.use(musicRoutes)

app.use('/static',express.static(path.resolve(__dirname,'..','public')))


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})