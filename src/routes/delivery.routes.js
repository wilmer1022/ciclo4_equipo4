import Router from 'express'
import * as deliveryCtrl from '../controllers/delivery.controller'

const router = Router()

// GET
router.get('/listshipments', deliveryCtrl.listShipmentsTask)

// POST
router.post('/scheduleshipment', deliveryCtrl.scheduleShipmentTask)


export default router
