const router = require('express').Router()
const homeController = require('../Controller/homeController')

router.get('/', homeController.home)

router.get('/product',homeController.product)
router.get('/product/create',homeController.createProduct)


module.exports = router;