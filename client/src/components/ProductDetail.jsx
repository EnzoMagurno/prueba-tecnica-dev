import React, { useEffect, useState } from 'react'
import PurchaseSimulation from './PurchaseSimulation'



const ProductDetail = ({product}) => {

  if(!product) return null

  const [amount, setAmount] = useState(1)
  
  if(amount===false){
    //modal para indicar no negativos.
  }

  return (
    <div className='product-card'>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>

    <div>
      <p>Amount: {amount}</p>
      <button onClick={()=>setAmount(amount+1)}>+</button>
      <button onClick={()=>setAmount(amount>1 ? amount-1 : amount)}
      disabled={amount==1}  
      >-
      </button>
    </div>

    <PurchaseSimulation productId = {product.id} amount = {amount} currentStock = {product.stock}/>
    
    </div>
  )
}

export default ProductDetail