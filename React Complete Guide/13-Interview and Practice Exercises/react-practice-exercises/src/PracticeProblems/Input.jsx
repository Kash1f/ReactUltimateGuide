import React, { useState } from 'react'

const Input = () => {

    const[input, setInput] = useState("")

    const handleClick = (e) => {
        setInput(e.target.value)
    }


  return (
    <>
    <label>
        User Input:
    <input type='text' value={input} onChange={handleClick}/>
    
    </label>
    </>
  )
}

export default Input