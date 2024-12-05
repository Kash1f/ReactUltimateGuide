import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

    const params = useParams();
    console.log(params);
    

    const { id } = params;
   

  return (
    <div>
       <h1>Recipe details of recipe item {id} </h1>
    </div>
  )
}

export default RecipeDetails;
