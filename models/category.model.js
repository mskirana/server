import {Schema, model} from 'mongoose'

/**
 * CategorySchema defines a category for products
 */
var CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    content: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 200
    }
})

export default model('Category', CategorySchema)