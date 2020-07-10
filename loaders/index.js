import logger from './logger.js'
import serverLoader from './server.js'

export default (app) => {
    // load the server
    serverLoader(app)
    logger.info('[loaders] Server loaded')
}