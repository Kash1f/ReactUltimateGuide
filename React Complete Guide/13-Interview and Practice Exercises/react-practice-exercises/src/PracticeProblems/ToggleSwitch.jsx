import React, { useState } from 'react'

const ToggleSwitch = () => {

    const [isToggled, setisToggled] = useState(false); //false so that it stays off

    function handleToggle(){
        setisToggled(!isToggled)
    }

  return (
<>
    <label>
        <input type="checkbox" onChange={handleToggle} />
    </label>
    <p>{isToggled ? "On" : "Off"}</p>




</>

  )
}

export default ToggleSwitch