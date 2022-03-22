const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title cannot be empty"],
            minlength: [3, "title has to be at least 3 characters long"]
        },
        price: {
            type: Number,
            required: [true, "price cannot be empty"],
            minlength: [1, "price has to be at least 1 characters long"]
        },
        description: {
            type: String,
            required: [true, "description cannot be empty"],
            minlength: [3, "description has to be at least 3 characters long"]
        },
    },
    { timestamps: true }
);



const Products = mongoose.model("Products", ProductSchema)

module.exports = Products


