import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/services">Login</NavLink></li>
    <li><NavLink to="/company">Contact</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/search">Search</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    
   </>
  )
}

export default Header