const router = require('express').Router()
const productController = require('../Controller/productController')

router.get('/', productController.home)
router.post('/product/create', productController.createProduct);
router.get('/product', productController.listProducts);
router.delete('/product/delete/:id', productController.deleteProduct);
router.post('/product/:id/update_quantity', productController.updateQuantity);




module.exports = router;