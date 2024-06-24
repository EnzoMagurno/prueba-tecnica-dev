import React, { useEffect, useState } from 'react'
import PurchaseSimulation from './PurchaseSimulation'


const ProductDetail = ({product}) => {

  return (
    <div className='product-card'>
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock: ${product.stock}</p>
    <PurchaseSimulation productId = {product.id} currentStock = {product.stock}/>
    </div>
  )
}

export default ProductDetail