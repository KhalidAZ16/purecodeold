import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBarAr.css';
// import logo from '../public/logo-index.png';

function NavBar_ar() {
  return (
    <>
      <nav className='navBar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            انقليزي
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar_ar;