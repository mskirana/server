import Product from './product.model.js'
import mongoose from 'mongoose'

/**
 * OrderSchema defines an order in the application
 */
const OrderSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['placed', 'review', 'accepted', 'rejected', 'delivered'],
        required: true
    },
    products: {
        type: [Product.schema],
        required: true
    }
})

export default mongoose.model('Order', OrderSchema)