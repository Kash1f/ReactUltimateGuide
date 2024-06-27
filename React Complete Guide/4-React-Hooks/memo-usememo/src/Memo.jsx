import { useState } from "react"



function Memo() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    setInput(e.target.value)


  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click Me</button>

    <br/>

    <input type="text" value={input} onChange={handleInput}/>


      <hr/>
      {/* <NewComp newCount={count}></NewComp> */}
      


    </>
  )
}

export default Memo
