import express from 'express'
import morgan from 'morgan'
import config from './config.js'

const app = express()
app.use(express.json({limit: "5mb"}))
app.use(express.urlencoded({ limit: "5mb", extended: false }))

if (config.env !== 'test') {
    app.use(morgan("dev"))
}

app.get('/', (_, res) => res.send('Hello, world!'))

app.listen(config.port, config.host, () => {
    console.log(`MsKirana server listening at ${config.host}:${config.port}`)
})