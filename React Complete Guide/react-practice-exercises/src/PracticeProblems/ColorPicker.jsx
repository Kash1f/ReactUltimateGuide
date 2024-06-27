import React, { useState } from 'react'

const ColorPicker = () => {

    const [selectedColor, setSelectedColor] = useState('#000000')

    const handleChange = (e) =>{
        setSelectedColor(e.target.value)
    }


  return (
    <div>
        <input type="color" onChange={handleChange}/>


    </div>
  )
}

export default ColorPicker