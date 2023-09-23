const router = require("express").Router();
const protectUser = require("../Config/authMiddleware");
const productController = require("../Controller/productController");
const userController = require("../Controller/userController");

router.get("/", productController.home);
router.post("/product/create", protectUser, productController.createProduct);
router.get("/product", protectUser, productController.listProducts);
router.delete("/product/delete/:id", protectUser, productController.deleteProduct);
router.patch("/product/:id/update_quantity", protectUser, productController.updateQuantity);

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);
router.get("/user", protectUser, userController.getUser);

module.exports = router;
