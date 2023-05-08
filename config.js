import dotenv from 'dotenv'
dotenv.config()

const key = process.env.KEY
const url = 'https://api.hgbrasil.com/geoip?key=' + key + '&address=remote'

export default url