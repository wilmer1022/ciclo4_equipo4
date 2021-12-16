import Shipment from "../models/Shipment";

// DELIVERY TASKS

export const listShipmentsTask = async (req, res) => {
  const shipments = await Shipment.find()
  res.status(200).json(shipments)
}

export const scheduleShipmentTask = async (req, res) => {
  const newShipment = new Shipment({
    token: req.body.token,
    cliente: req.body.cliente,
    repartidor: req.body.repartidor,
    peso: req.body.paquete.peso,
    alto: req.body.paquete.alto,
    ancho: req.body.paquete.ancho,
    largo: req.body.paquete.largo,
    delicado: req.body.paquete.delicado,
    dir_origen: req.body.envio.dir_origen,
    dir_destino: req.body.envio.dir_destino,
    valor_declarado: req.body.envio.valor_declarado,
    valor_seguro: req.body.envio.valor_seguro,
    estado: req.body.envio.estado,
  });
  await newShipment.save();
  res.status(201).json({ message: "Envío programado con exito." });
};
