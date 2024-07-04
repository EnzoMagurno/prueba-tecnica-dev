import React from 'react'
import logo from '../../public/ecommerce.webp'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {

  const handleCart = () =>{
    
  }

  return (
    <div className='logo-div'>
    <div className='logo-name'>
      <img src={logo} alt="E-commerce Logo" onClick={()=>window.location.reload()}/>
      <h2>Products</h2>
    </div>
    <div className='cart-div'>
      <FaShoppingCart className='cart' onClick={handleCart}/>
    </div>
  </div>
)
}

export default Header