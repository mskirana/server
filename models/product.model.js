import mongoose from 'mongoose'

/**
 * ProductSchema defines a product in the inventory
 */
var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    price: {
        type: Number,
        required: false,
        min: 0
    },
    quantity: {
        type: String,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        required: false
    }
})

export default mongoose.model('Product', ProductSchema)