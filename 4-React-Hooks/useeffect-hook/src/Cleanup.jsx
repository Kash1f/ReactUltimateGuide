import React, { useEffect, useState } from 'react'


const Cleanup = () => {

  const [clicked, setClicked] = useState("")
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('We are in useState')

    return (
        ()=>{
            console.log("Return of useState");
        }
    )



  }, [clicked, count])

  return (
    <>
      <button onClick={() => setClicked('Subscribe')}>Subscribe</button>
      <br />
      <hr />

      <button onClick={() => setClicked('To')}>To</button>
      <br />
      <hr />

      <button onClick={() => setClicked('Me')}>Me</button>



      <h1>{clicked}</h1>

      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <h1>{count}</h1>
    </>
  )
}

export default Cleanup
