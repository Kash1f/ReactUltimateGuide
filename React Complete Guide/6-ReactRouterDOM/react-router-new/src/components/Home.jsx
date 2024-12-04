import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about')
  }

  return (
   <>
   
    <h3>Home Page</h3>
    <button onClick={handleClick}>Go to About</button>
   
   </>
  )
}

export default Home
