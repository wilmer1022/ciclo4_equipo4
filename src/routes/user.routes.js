import Router from 'express'
import * as userCtrl from '../controllers/user.controller'

const router = Router()

// GET
router.get('/user_info/:id', userCtrl.userInfoTask)

// POST
router.post('/login', userCtrl.loginUserTask)
router.post('/register', userCtrl.registerUsersTask)

export default router
