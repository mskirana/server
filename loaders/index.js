import dbLoader from './database.js'
import logger from './logger.js'
import serverLoader from './server.js'

export default async (app) => {
    // connect to the database
    await dbLoader().then(() => {
        logger.info('[loaders] connected to database')
    }).catch((err) => {
        logger.error(`[loaders] error connecting to database ${err}`)
        throw err
    })

    // load the server
    serverLoader(app)
    logger.info('[loaders] Server loaded')
}