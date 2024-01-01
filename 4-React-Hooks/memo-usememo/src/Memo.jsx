import { useState } from "react"
import NewComp  from "./NewComp"

function Memo() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click Me</button>
      <hr/>
      <NewComp></NewComp>


    </>
  )
}

export default Memo
