const Product = require('../model/productModel');
const queryProducts = require('../services/odooServices')

async function createProducts(req, res) {
  try {
    const products = await queryProducts()
    const response = products.map((product) => {
      return {
        id: product.id,
        title: product.name,
        price: product.list_price,
        category: product.category_name,
        image: null,
        description: product.description_sale,
        stock: 100,
      }
    })
    console.log('Array filtrado:', response)
    const bd = await Product.bulkCreate(response)
    console.log('Insertado en BD:', bd)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).send('Error al intentar crear products', error.message)
  }
}

async function allProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function fetchById (req,res){
  const {id} = req.body
  try {
    const product = await Product.findOne({where:id})
    res.json(product)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function queryByCategory(req, res) {
  const { category } = req.body
  try {
    const products = await Product.findAll({
      where: { category }
    })
    if (products.length === 0) {
      return res.status(404).json({ message: 'No tenemos productos con esa categoría' })
    }
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function updateStock(req, res) {
  const { id, quantity } = req.body
  try {
    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'No tenemos stock de ese producto' })
    }
    product.stock -= quantity
    await product.save()

    res.json({ message: 'Stock actualizado correctamente', product })
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  allProducts,
  createProducts,
  queryByCategory,
  updateStock,
  fetchById
};
