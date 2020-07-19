import Order from '../models/order.model.js'
import Product from '../models/product.model.js'


export default class OrderService {
    /**
     * Creates a new order that user sends
     * @param {*} products 
     */
    static async CreateOrder(products) {
        var productArr = []
        products.forEach(product => {
            productArr.push(new Product({
                title: product.title,
                quantity: product.quantity,
                remarks: product.remarks,
            }))
        })

        // initial state
        const order = new Order({
            status: 'placed',
            products: productArr
        })

        return await order.save()
    }

    /**
     * Retreive an order
     * @param {*} orderId 
     */
    static async GetOrder(orderId) {
        return await Order.find({_id: orderId})
    }

    /**
     * Used by shopkeeper to verify an order
     * @param {*} orderId 
     * @param {*} products
     */
    static async VerifyOrder(orderId, products) {
        var productArr = []
        products.forEach(product => {
            productArr.push(new Product({
                title: product.title,
                quantity: product.quantity,
                price: product.price,
                remarks: product.remarks,
                available: product.available
            }))
        })

        return await Order.findByIdAndUpdate({_id: orderId}, 
            {
                status: 'review',
                products: productArr
            }) 
    }
}