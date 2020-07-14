import config from '../config.js'
import mongoose from 'mongoose'

const url = `mongodb://${config.db.username}:${config.db.password}@${config.db.hostname}:${config.db.port}/${config.db.db}?authSource=admin`

export default async () => {
    const connection = await mongoose.connect(url, config.db.options)
    return connection.connection.db
}