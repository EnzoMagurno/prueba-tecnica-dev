import React, { useEffect, useState } from 'react'
import PurchaseSimulation from './PurchaseSimulation'



const ProductDetail = ({product}) => {
  if(!product) return null
  const [amount, setAmount] = useState(1)
  
  
  return (
    <div className='product-card'>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <div>
      <p>Amount: {amount}</p>
      <button>+</button>
      <button>-</button>
    </div>
    <PurchaseSimulation productId = {product.id} currentStock = {product.stock}/>
    </div>
  )
}

export default ProductDetail