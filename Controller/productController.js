const Product = require("../Models/product");

module.exports.home = (req, res) => {
	res.send("Welcome to Ecommerce API");
};

// jwt authorization for create product
module.exports.createProduct = async (req, res) => {
	console.log(req.body);
	try {
		const { name, quantity } = req.body;
		const product = await Product.create({ name, quantity });
		return res.json({ product });
	} catch (error) {
		res.status(500).json({ error: "Error creating product" });
	}
};

module.exports.listProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json({ products });
	} catch (error) {
		res.status(500).json({ error: "Error fetching products" });
	}
};

// jwt authorization for deleting products
module.exports.deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		await Product.findByIdAndDelete(id);
		res.json({ message: "Product deleted" });
	} catch (error) {
		res.status(500).json({ error: "Error deleting product" });
	}
};

// jwt authorization for updating a product
module.exports.updateQuantity = async (req, res) => {
	try {
		const product = await Product.findById(req.params._id);

		if (!product) {
			return res.status(404).json({ error: "Product not found" });
		}

		if(product){
			const {name, quantity} = req.query;
			product.name = name;
			product.quantity = quantity;

			const updatedProduct = await product.save();

			return res.status(200).json({
				_id,
				name,
				quantity,
			})
		}

		return res.json({ product, message: "Updated successfully" });
	} catch (error) {
		res.status(500).json({ error: "Error updating quantity" });
	}
};
