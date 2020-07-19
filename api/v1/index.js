import express from 'express'
import orderRouter from './order.js'

const router = express.Router()

router.use('/order', orderRouter)

router.get('/', (_, res) => {
    res.status(200).send('Hello, world!')
})

export default router