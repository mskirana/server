import {Schema, model} from 'mongoose'
import CategorySchema from './category.model.js'

/**
 * ProductSchema defines a product in the inventory
 */
var ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    summary: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 200
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        required: false,
        min: 0,
        max: 100
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    categories: {
        type: [CategorySchema],
        required: true
    }
})

export default model('Product', ProductSchema)