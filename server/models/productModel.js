const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
