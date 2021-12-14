import Router from 'express'
import * as deliveryCtrl from '../controllers/delivery.controller'

const router = Router()

// GET

// POST
router.post('/login', deliveryCtrl.loginUserTask)
router.post('/register', deliveryCtrl.registerUsersTask)

export default router
