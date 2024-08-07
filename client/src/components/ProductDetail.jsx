import React, {useState } from 'react'
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
      <button className='button' onClick={()=>setAmount(amount+1)}>+</button>
      <button className='button' onClick={()=>setAmount(amount>1 ? amount-1 : amount)}
      disabled={amount==1}  
      >-
      </button>
    </div>

    <PurchaseSimulation productId = {product.id} amount = {amount} currentStock = {product.stock}/>
    
    </div>
  )
}

export default ProductDetail