import config from './config.js'
import express from 'express'
import loaders from './loaders/index.js'
import logger from './loaders/logger.js'

const app = express()

function startServer(app) {
    app.listen(config.server.port, config.server.host, (err) => {
        if (err) {
            logger.error(err)
            process.exit(1)
        } else {
            logger.info(`[app] mskirana server listening at ${config.server.host}:${config.server.port}`)
        }
    })
}

// load all the components
loaders(app).then(() => {
    startServer(app)
}).catch((err) => {
    logger.info(`[app] exiting because of error ${err}`)
})