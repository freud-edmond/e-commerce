const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes
router.get('/', productController.showHome);
router.get('/categorie/:category', productController.showCategory);
// router.get('/produit/:id', productController.showProduct);

module.exports = router;
