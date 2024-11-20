import React, { useReducer } from 'react'

const Drag = () => {

    const [boxState, dispatch] = useReducer(boxReducer,{left:0, top:0});

    



  return (
    <div>Drag</div>
  )
}

export default Drag