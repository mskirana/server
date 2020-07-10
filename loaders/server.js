import config from '../config.js'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import routes from '../api/index.js'

export default (app) => {
    // Enable Cross Origin Resource Sharing
    app.use(cors())

    // Middleware to transform request body into JSON
    app.use(express.json({limit: "5mb"}))

    // Middleware to parse URL encoded payloads
    app.use(express.urlencoded({ limit: "5mb", extended: false }))

    // Log HTTP requests if not in test environment
    if (config.env !== 'test') {
        app.use(morgan("dev"))
    }

    // Configure API routes
    app.use(config.api.prefix, routes)
}