import {Schema, model} from 'mongoose'
import ProductSchema from './product.model.js'

/**
 * OrderSchema defines an order in the application
 */
var OrderSchema = new Schema({
    status: {
        type: String,
        enum: ['placed', 'review', 'accepted', 'rejected', 'delivered'],
        required: true
    },
    products: {
        type: [ProductSchema],
        required: true
    }
})

export default model('Order', OrderSchema)