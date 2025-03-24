const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flowerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    }

}, { timestamps: true})

module.exports = mongoose.model('flower', flowerSchema)

