import Router from 'express'
import * as deliveryCtrl from '../controllers/delivery.controller'

const router = Router()

// GET
router.get('/listshipments', deliveryCtrl.listShipmentsTask)
router.get('/shipment_info/:id', deliveryCtrl.shipmentByIdTask)

// POST
router.post('/scheduleshipment', deliveryCtrl.scheduleShipmentTask)

// PUT
router.put('/upgrade_shipment', deliveryCtrl.upgradeShipmentTask)


export default router
