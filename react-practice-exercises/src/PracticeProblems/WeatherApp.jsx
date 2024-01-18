import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

    const [weather,setWeather] = useState(null)

    useEffect(()=>{
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition((position)) =>{
    }}
    })



  return (
    <div>



    </div>
  )
}

export default WeatherApp