import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import logo from '../public/logo-index.png';

function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <div className='navbar-container'>
          <Link to='/Home_ar' className='navbar-logo'>
            عربي
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;