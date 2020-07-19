import Product from './product.model.js'
import mongoose from 'mongoose'

/**
 * CartSchema defines a cart for a user
 * Note: in this mock app, we only have one user
 */
const CartSchema = new mongoose.Schema({
    products: {
        type: [Product],
        required: true
    }
})

export default mongoose.model('Cart', CartSchema)