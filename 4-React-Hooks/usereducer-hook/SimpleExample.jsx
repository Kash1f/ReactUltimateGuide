import { useReducer } from "react"


const SimpleExample = () => {

    const[name, setName] = useReducer((state, action)=>{
        return state + action
    }, 'John')

  return (
   
    <>
    
        <h1>{name}</h1>
        <button onClick={()=> {setName('Mike')}}>Change</button>
    
    </>
  )
}

export default SimpleExample