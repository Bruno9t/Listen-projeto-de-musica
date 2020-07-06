import express from 'express'

import MusicController from '../controllers/MusicController'

const router = express.Router()

router.post('/musics',MusicController.create)
router.get('/musics',MusicController.index)

export default router