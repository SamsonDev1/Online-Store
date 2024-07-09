import React from 'react';
import icon from './images/Vector (3).png';
import cart from './images/ShoppingCart-r.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><Link className='home-page' to='/'>StrideSavvy</Link></div>
      <div className="navbar-links">
        <img src={icon}  alt='icon' />
        <span>Hi, Pedro</span>
        <div className="vertical-line"></div>
        <img src={cart} alt='cart' />
        <Link  className='cart-link' to="/cart">
        <span className="cart">Cart </span>
        </Link>
      </div>
    </nav>
  );
}


export default Navbar
