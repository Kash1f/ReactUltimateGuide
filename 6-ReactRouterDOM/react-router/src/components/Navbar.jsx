import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       
            <Link to="/">Home</Link>
          
        <ul>
        <li>
            <Link to="/about">About Us </Link>
            </li>
        <li>
           <Link to="/contact"> Contact Us </Link>
            </li>
            <li>
           <Link to="/login"> <button>Login</button>  </Link>
            </li>



        </ul>






    </div>
  )
}

export default Navbar