const router = require('express').Router()
const productController = require('../Controller/productController')
const userController = require("../Controller/userController")

router.get('/', productController.home)
router.post('/product/create', productController.createProduct);
router.get('/product', productController.listProducts);
router.delete('/product/delete/:id', productController.deleteProduct);
router.patch('/product/:id/update_quantity', productController.updateQuantity);

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);


module.exports = router;