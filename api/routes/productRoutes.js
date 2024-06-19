const express = require('express');
const router = express.Router();
const  {getProducts,createProducts}  = require('../controllers/productController');

router.get('/products', getProducts);
router.get('/createProducts', createProducts)

module.exports = router