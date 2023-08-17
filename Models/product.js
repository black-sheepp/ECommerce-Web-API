const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    quantity:{
        type: Number,
        required: true,
    },
},{
    timestamps: true
})

const Product = mongoose.model("Product", userSchema);
module.exports = Product;