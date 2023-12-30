import {useState} from "react";
import CompA from './components/CompA'
function App() {

 
  const [data,setData] = useState("YT")
  return (
    <>
   <h1>Home</h1>
    <CompA data={data}/>
    </>
  )
}

export default App
