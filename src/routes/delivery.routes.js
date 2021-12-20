import Router from 'express'
import * as deliveryCtrl from '../controllers/delivery.controller'

const router = Router()

// GET
router.get('/list_shipments', deliveryCtrl.listShipmentsTask)
router.get('/shipment_info/:id', deliveryCtrl.shipmentByIdTask)
router.get('/list_new_shipments', deliveryCtrl.listNewShipmentsTask)
router.get('/list_dealers', deliveryCtrl.listDealersTask)

// POST
router.post('/scheduleshipment', deliveryCtrl.scheduleShipmentTask)
router.post('/register_dealer', deliveryCtrl.registerDealerTask)
router.post('/assing_dealer', deliveryCtrl.assignDealerTask)

// PUT
router.put('/upgrade_shipment', deliveryCtrl.upgradeShipmentTask)


export default router
