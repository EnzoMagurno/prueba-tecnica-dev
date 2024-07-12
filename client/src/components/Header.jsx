import React, { useState } from 'react';
import logo from '../../public/ecommerce.jpg';
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Header = ({ notificationVisible, cartItems, onCloseCart }) => {
  const [showCart, setShowCart] = useState(false);


  const handleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
    if(showCart){
      onCloseCart()
    }
  };

  return (
    <div className='logo-div'>
      <div className='logo-name'>
        <img src={logo} alt="E-commerce Logo" onClick={() => window.location.reload()} />
        <h2>Products</h2>
      </div>
      <div className='searchDiv'>
        <label htmlFor='search'>
          <FaMagnifyingGlass />
        </label>
        <input id='search' type="text" placeholder='Search products...' />
      </div>
      <div className='cart-div'>
        <div className='cart-icon'>
        <FaShoppingCart className='cart' onClick={handleCart} />
        {notificationVisible && <GoDotFill className='notificationCart' />}
        </div>
        {showCart && (
          <div className='cart-modal'>
            <p>Cart</p>
            <IoClose className='button' onClick={handleCart} />
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
