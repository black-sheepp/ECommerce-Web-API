const Product = require("../Models/product");

module.exports.home = (req, res) => {
     res.send("Welcome to Ecommerce API");
};

module.exports.product = async (req, res) => {
    let products = await Product.find({});
    return res.send(products);
};

module.exports.createProduct = async (req,res) => {
    return res.send("Add Product")
}
