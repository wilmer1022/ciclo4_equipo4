import Shipment from "../models/Shipment";
import User from "../models/User"
import Role from "../models/Role"

// DELIVERY TASKS

export const listShipmentsTask = async (req, res) => {
  const shipments = await Shipment.find().populate("cliente repartidor")
  return res.status(200).json(shipments)
}

export const shipmentByIdTask = async (req, res) => {
  const shipment = await Shipment.findOne({ token: req.params.id });
  res.status(200).json(shipment)
}

export const scheduleShipmentTask = async (req, res) => {
  const newShipment = new Shipment({
    token: req.body.token,
    cliente: req.body.cliente,
	hora_disponible: req.body.hora_disponible,
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
  res.status(200).json({ message: "Actualizado con éxito." });
}

export const registerDealerTask = async (req, res) => {
  const newUser = new User({
    dni: req.body.dni,
    nombre: req.body.nombre,
    primer_correo: req.body.primer_correo,
    password: await User.encryptPassword(req.body.password),
    telefono: req.body.telefono,
    direccion: req.body.direccion,
  });
  const role = await Role.find({ nombre: { $in: req.body.rol } });
  newUser.rol = role.map((rol) => rol._id);
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado con exito." });
}

export const listNewShipmentsTask = async (req, res) => {
  const shipments = await Shipment.find();
  const new_shipments = shipments.filter(x => {if(x.envio.estado === "Asignar repartidor")
	  return x
	})
  res.status(200).json(new_shipments)
}

export const listDealersTask = async (req, res) => {
  const dealers = await User.find().populate("rol");
  const list_dealers = dealers.filter(x => {if(x.rol.nombre === "repartidor")
	  return x})
  res.status(200).json(list_dealers)
}

export const assignDealerTask = async (req, res) => {
  const shipment = await Shipment.findOne({ token: req.body.id }).select("repartidor");
  shipment.repartidor = req.body.repartidor
  shipment.estado = "Pendiente de recogida."
  await shipment.save()
  res.status(200).json({ message: "Asignado con éxito." });
}