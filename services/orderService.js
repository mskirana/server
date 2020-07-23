import Order from '../models/order.model.js'
import Product from '../models/product.model.js'


export default class OrderService {
    /**
     * Creates a new order that user sends
     * @param {*} products 
     * @param {*} remarks
     */
    static async CreateOrder(products, remarks) {
        var productArr = []
        products.forEach(product => {
            productArr.push(new Product({
                title: product.title,
                quantity: product.quantity,
            }))
        })

        // initial state
        const order = new Order({
            status: 'placed',
            products: productArr,
            remarks: remarks
        })

        return await order.save()
    }

    /**
     * Retreive an order
     * @param {*} orderId 
     */
    static async GetOrder(orderId) {
        return await Order.findOne({_id: orderId})
    }

    /**
     * Get all orders
     */
    static async GetOrders() {
        return await Order.find({})
    }

    /**
     * Used by shopkeeper to verify an order
     * @param {*} orderId 
     * @param {*} products
     * @param {*} remarks
     */
    static async VerifyOrder(orderId, products, remarks) {
        var order = await this.GetOrder(orderId)
        
        if (order === null)
            throw new Error("Cannot find the order")

        if (order.status !== "placed") 
            throw new Error("Order is not open to verification")
        
        var productArr = []
        products.forEach(product => {
            productArr.push(new Product({
                title: product.title,
                quantity: product.quantity,
                price: product.price,
                available: product.available
            }))
        })

        // update the order
        order.status = 'review'
        order.products = productArr
        order.remarks = remarks

        return await order.save()
    }

    /**
     * Used by user to edit a order under 'review'
     * @param {*} orderId 
     * @param {*} products 
     * @param {*} remarks
     */
    static async EditOrder(orderId, products, remarks) {
        var order = await this.GetOrder(orderId)

        if (order === null)
            throw new Error("Cannot find the order")
        
        if (order.status !== "review")
            throw Error("Cannot edit product unless it's under review")

        var productArr = []
        products.forEach((product) => {
            var p = Product({
                title: product.title,
                quantity: product.quantity,
            })

            var match = order.products.find(o => o.title == product.title)
            if (match !== undefined) {
                p.price = match.price
                p.available = match.available
            }
            
            productArr.push(p)
        })

        // update the order
        order.status = 'placed'
        order.products = productArr
        order.remarks = remarks

        return await order.save()
    }

    /**
     * Used by user or shopkeeper to update the order status
     * @param {*} orderId 
     * @param {accepted/rejected/delivered} status 
     */
    static async UpdateStatus(orderId, status) {
        var order = await this.GetOrder(orderId)

        if (order === null)
            throw new Error("Cannot find the order")

        if (status === "accepted") {
            if (order.status !== "placed")
                throw new Error("Only placed orders can be accepted")
        } else if (status === "rejected") {
            if (!["review", "placed"].includes(order.status))
                throw new Error("Only orders that are placed or under review can be rejected")
        } else if (status == "delivered"){
            if (order.status !== "accepted")
                throw new Error("Only accepted orders can be delivered")
        } else 
            throw new Error("Invalid status, expected accepted/rejected")

        // update the status
        order.status = status
        return await order.save()
    }
}