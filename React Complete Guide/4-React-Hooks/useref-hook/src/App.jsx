import { useRef } from 'react'
import './App.css'

function App() {

  const reference = useRef(initialValue);
  console.log(reference);
  return (
    <>

      Hello 
    </>
  )
}

export default App


//useRef hook lets you reference a particular value which is not needed for rendering. useRef is really helpful when you want to access DOM elements want to manipulate them and it will always return a mutable object. 
