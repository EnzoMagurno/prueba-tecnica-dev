const express = require('express');
const router = express.Router();
const { allProducts, createProducts, queryByCategory, updateStock } = require('../controllers/productController');

router.get('/products', allProducts);
router.get('/createProducts', createProducts)
router.get('/products/filter', queryByCategory)
router.get('/products/updateStock', updateStock)


module.exports = router