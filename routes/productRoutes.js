const express = require('express');
const router = express.Router();
const  productController = require('../controllers/productController');

router.get('/',  productController.showHome);
// router.get('/category/:type', controller.showCategory);
// router.get('/product/:id', controller.showProduct);

module.exports = router;
