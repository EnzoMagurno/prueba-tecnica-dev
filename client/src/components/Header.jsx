import React from 'react'
import logo from '../../public/ecommerce.webp'

const Header = () => {
  return (
    <div className='logo-div'>
      <img  src={logo} alt="E-commerce Logo" />
      <h2>Products</h2>
      
    </div>
)
}

export default Header