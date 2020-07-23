import express from 'express'
import mongoose from 'mongoose'
import orderService from '../../services/orderService.js'

const router = express.Router()

/**
 * Place a new order
 */
router.post('/', (req, res)  => {
    const products = req.body.products
    const remarks = req.body.remarks || ""

    orderService.CreateOrder(products, remarks).then((order) => {
        res.status(200).json({
            order: order,
            message: "Order successfully created!"
        })
    }).catch((err) => {
        res.status(500).json({
            message: `Error placing order. ${err}`
        })
    })
})

/**
 * Get all orders
 */
router.get('/', (req, res) => {
    orderService.GetOrders().then((orders) => {
        res.status(200).json(orders)
    }).catch((err) => {
        res.status(500).json({
            message: `Error getting orders. ${err}`
        })
    })
})

/**
 * Get an order
 */
router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId
    
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: "Bad request, orderId is not valid"
        })
    }

    orderService.GetOrder(orderId).then((order) => {
        res.status(200).json(order)
    }).catch(() => {
        res.status(404).json({
            message: "Order not found"
        })
    })
})

/**
 * Verify an order
 * 
 */
router.post('/:orderId/verify', (req, res) => {
    const orderId = req.params.orderId
    const products = req.body.products
    const remarks = req.body.remarks || ""
    
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: "Bad request, orderId is not valid"
        })
    }

    orderService.VerifyOrder(orderId, products, remarks).then(() => {
        res.status(200).json({
            id: orderId,
            message: "Order successfully verified!"
        })
    }).catch((err) => {
        res.status(500).json({
            message: `Error verifying order. ${err}`
        })
    })
})

/**
 * Edit an order
 */
router.post('/:orderId/edit', (req, res) => {
    const orderId = req.params.orderId
    const products = req.body.products
    const remarks = req.body.remarks || ""

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: "Bad request, orderId is not valid"
        })
    }

    orderService.EditOrder(orderId, products, remarks).then(() => {
        res.status(200).json({
            id: orderId,
            message: "Order successfully edited!"
        })
    }).catch((err) => {
        res.status(500).json({
            message: `Error editing order. ${err}`
        })
    })
})

/**
 * Change the status of an order, 
 */
router.put('/:orderId/:status(accept|reject|deliver)', (req, res) => {
    const orderId = req.params.orderId
    const status = req.params.status + "ed"

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: "Bad request, orderId is not valid"
        })
    }

    orderService.UpdateStatus(orderId, status).then(() => {
        res.status(200).json({
            id: orderId,
            message: `Order successfully ${status}`
        })
    }).catch((err) => {
        res.status(500).json({
            message: `Error updating status for order. ${err}`
        })
    })
})

export default router