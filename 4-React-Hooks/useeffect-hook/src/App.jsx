import React, { useEffect, useState } from 'react'


const App = () => {

  const [clicked, setClicked] = useState("")
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('We are in useState')
  }, [count])

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

export default App
