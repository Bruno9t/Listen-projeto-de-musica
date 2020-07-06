import express from 'express'

import UserController from '../controllers/UserController'

const router = express.Router()

router.post('/auth/register',UserController.create)
router.post('/auth/login',UserController.store)
router.get('/users',UserController.index)

export default router