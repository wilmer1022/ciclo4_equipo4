import { Schema, model } from "mongoose";

const shipmentSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  cliente: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: true,
  },
  repartidor: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: false,
  },
  hora_disponible: {
	type: Date,
	required: true,
  },
  paquete: {
    peso: {
      type: Number,
      required: true,
      alias: "peso",
    },
    largo: {
      type: Number,
      required: true,
      alias: "largo",
    },
    alto: {
      type: Number,
      required: true,
      alias: "alto",
    },
    ancho: {
      type: Number,
      required: true,
      alias: "ancho",
    },
    delicado: {
      type: Boolean,
      required: true,
      alias: "delicado",
    },
  },
  envio: {
    dir_origen: {
      type: String,
      required: true,
      alias: "dir_origen",
    },
    dir_destino: {
      type: String,
      required: true,
      alias: "dir_destino",
    },
    valor_declarado: {
      type: Number,
      required: false,
      alias: "valor_declarado",
    },
    valor_seguro: {
      type: Number,
      required: false,
      alias: "valor_seguro",
    },
    estado: {
      type: String,
      required: true,
      alias: "estado",
    },
	costo_envio: {
	  type: Number,
	  required: false,
	  alias: "costo_envio",
	}
  },
});

export default model("Shipment", shipmentSchema);
