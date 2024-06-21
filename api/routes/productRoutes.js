const express = require('express');
const router = express.Router();
const { allProducts, createProducts, getProduct } = require('../controllers/productController');

router.get('/products', allProducts);
router.get('/createProducts', createProducts)
router.get('/getProduct', getProduct)

module.exports = router