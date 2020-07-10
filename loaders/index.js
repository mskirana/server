import logger from './logger.js'
import serverLoader from './server.js'

export default (app) => {
    serverLoader(app)
    logger.info('[loaders] Server loaded')
}