import React, { useEffect, useState } from 'react'
import PurchaseSimulation from './PurchaseSimulation'


const ProductDetail = ({product}) => {
    console.log('ProductXDDD: ',product);
    if(!product) return null
  return (
    <div className='product-card'>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <PurchaseSimulation productId = {product.id} currentStock = {product.stock}/>
    </div>
  )
}

export default ProductDetail