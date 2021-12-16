import {config} from 'dotenv'

config()

export default {
  mongodbURL: process.env.MONGODB_URI,
  originURL: process.env.REACT_HOST,
  secretKEY: process.env.SECRET_KEY
}
