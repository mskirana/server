import {Schema, model} from 'mongoose'
import ProductSchema from './product.model.js'

/**
 * CartSchema defines a cart for a user
 * Note: in this mock app, we only have one user
 */
var CartSchema = new Schema({
    products: {
        type: [ProductSchema],
        required: true
    }
})

export default model('Cart', CartSchema)