const Product = require('../model/productModel');
const queryProducts = require('../services/odooServices')

async function createProducts(req,res){
  try {
    const products = await queryProducts()
    const response = products.map((product)=>{
      return {
        id: product.id,
        title: product.name,
        price:product.list_price,
        category:product.category_name,
        image:null,
        description:product.description_sale,
        stock:100,
      }
    })
    console.log('Array filtrado:', response)
    const bd = await Product.bulkCreate(response)
    console.log('Insertado en BD:',bd)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).send('Error al intentar crear products', error.message)
  }
}
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getProducts,
    createProducts,
};
