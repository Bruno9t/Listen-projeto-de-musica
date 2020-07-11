import express from 'express'

import PlaylistController from '../controllers/PlaylistController'

const router = express.Router()


router.post('/playlists',PlaylistController.create)
router.get('/playlists',PlaylistController.index)
router.post('/playlist/musics/add')

export default router