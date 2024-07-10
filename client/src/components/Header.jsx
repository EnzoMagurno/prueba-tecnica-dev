import React from 'react'
import logo from '../../public/ecommerce.jpg'
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";



const Header = () => {

  const handleCart = () =>{
    
  }

  return (
    <div className='logo-div'>
    <div className='logo-name'>
      <img src={logo} alt="E-commerce Logo" onClick={()=>window.location.reload()}/>
      <h2>Products</h2>
    </div>

    <div className='searchDiv'>
      <label for='search'>
      <FaMagnifyingGlass/>
      </label>
      <input id='search' type="text" placeholder='Search products...' />
    </div>
    
    <div className='cart-div'>
      <FaShoppingCart className='cart' onClick={handleCart}/>
    </div>
  </div>
)
}

export default Header