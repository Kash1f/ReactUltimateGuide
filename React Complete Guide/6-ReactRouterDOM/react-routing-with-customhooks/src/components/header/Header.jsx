import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
     
      <li>
        <Link to="/home/recipe-list">Recipes</Link>
        
        </li>
        
      <li>
        <Link to="/home/comments-list">Comments</Link>
        </li>
    </div>
  )
}

export default Header
