import {Schema, model} from 'mongoose'

const userSchema = new Schema({
  dni: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    primer_correo: {
      type: String,
      required: true,
      alias: 'primer_correo'
    },
    segundo_correo: {
      type: String,
      required: false,
      alias: 'segundo_correo'
    }
  },
  password: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  rol:{
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  }
}, {
  versionKey: false,
  timestamp: true
})

export default model('User', userSchema)
