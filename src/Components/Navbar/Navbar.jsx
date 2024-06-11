import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nav_dropdown from '../Assets/navbar_dropdown.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <p>💥Sumélux</p>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{textDecoration:'none'}} to='/men'>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{textDecoration:'none'}} to='/women'>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link to='/login'><button><FontAwesomeIcon icon={faUser}/>  Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
