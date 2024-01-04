import React, { useEffect, useState } from 'react'

const Timer = () => {

    const[time,setTime] = useState(60);

   function timeOut(){
        setTime(time-1)
    }

    useEffect(()=>{

        if(time>0){
            const timer = setTimeout(()=> {timeOut()},1000);
            return () => clearTimeout(timer)
        }

    },[time])




  return (
    <div>
        Time Left: {time} seconds 
        
        </div>
  )
}

export default Timer