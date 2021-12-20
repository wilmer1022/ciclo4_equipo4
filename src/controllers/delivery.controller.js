import Shipment from "../models/Shipment";

// DELIVERY TASKS

export const listShipmentsTask = async (req, res) => {
  const shipments = await Shipment.find()
  res.status(200).json(shipments)
}

export const shipmentByIdTask = async (req, res) => {
  const shipment = await Shipment.findOne({ token: req.params.id });
  res.status(200).json(shipment)
}

export const scheduleShipmentTask = async (req, res) => {
  const newShipment = new Shipment({
    token: req.body.token,
    cliente: req.body.cliente,
    peso: req.body.paquete.peso,
    alto: req.body.paquete.alto,
    ancho: req.body.paquete.ancho,
    largo: req.body.paquete.largo,
    delicado: req.body.paquete.delicado,
    dir_origen: req.body.envio.dir_origen,
    dir_destino: req.body.envio.dir_destino,
    estado: req.body.envio.estado,
  });
  await newShipment.save();
  res.status(201).json({ message: "Envío programado con exito." });
};

export const upgradeShipmentTask = async (req, res) => {
  const updateShipment = await Shipment.findOne({ token: req.body.id });
  updateShipment.peso = req.body.peso
  updateShipment.alto = req.body.alto
  updateShipment.ancho = req.body.ancho
  updateShipment.largo = req.body.largo
  updateShipment.costo_envio = req.body.costo_envio
  updateShipment.valor_declarado = req.body.valor_declarado
  updateShipment.valor_seguro = req.body.valor_seguro
  updateShipment.estado = req.body.estado
  await updateShipment.save()
  res.status(200).json({ message: "hizo algo." });
}