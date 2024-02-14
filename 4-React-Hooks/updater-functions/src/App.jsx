//updater function = A function passed as an argument to setState() usually ex. setYear(year+1)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater function

import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  return (
    <>
    <h1>{increment}</h1>
   
    </>
  )
}

export default App
