import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../public/logo-index.png'

function NavBar() {
  return (
    <>
    <nav className='navBar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={logo}/>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar