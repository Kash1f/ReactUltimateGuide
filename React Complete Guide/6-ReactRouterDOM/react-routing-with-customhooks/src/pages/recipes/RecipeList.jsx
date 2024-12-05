import React from 'react'
import { useLocation } from 'react-router-dom';

const RecipeList = () => {

  const location = useLocation();

  return (
    <div>
      <h2>Recipe List</h2>
    </div>
  )
}

export default RecipeList
