const Product = require('../model/productModel');
const queryProducts = require('../services/odooServices')

async function createProducts(req,res){
  try {
    const products = await queryProducts()
    res.json(products)
    console.log(products)
  } catch (error) {
    res.status(500).send('Error al intentar crear products', error)
  }
}

async function getProducts(req, res) {
    console.log('l')
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// async function getProductById(req, res) {
//   const { id } = req.params;
//   try {
//     const product = await Product.findByPk(id);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function createProduct(req, res) {
//   const { title, price, description, category } = req.body;
//   try {
//     const newProduct = await Product.create({ title, price, description, category });
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function updateProduct(req, res) {
//   const { id } = req.params;
//   const { title, price, description, category } = req.body;
//   try {
//     const product = await Product.findByPk(id);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     await product.update({ title, price, description, category });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function deleteProduct(req, res) {
//   const { id } = req.params;
//   try {
//     const product = await Product.findByPk(id);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     await product.destroy();
//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

module.exports = {
    getProducts,
    createProducts,
  // getProductById,
  // createProduct,
  // updateProduct,
  // deleteProduct
};
