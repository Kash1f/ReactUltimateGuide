import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  let nav = useNavigate();

  return (
   <>
   
        <div>You can contact me for anything</div>
        <div>
          <button onClick={()=>nav('/')}>Go to Home Page &rarr;</button>
        </div>
   
   
   </>
  )
}

export default Contact