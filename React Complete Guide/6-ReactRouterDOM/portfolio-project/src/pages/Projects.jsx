import React from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {

  let nav = useNavigate();


  return (
  
  <>
  <div>These are the Projects</div>
  <button onClick={()=>{nav("/")}}>Go to Home Page &rarr;</button>
  </>
  )
}

export default Projects
