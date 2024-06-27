import React, { useState } from 'react'

const TodoList = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTodo = () => {
        if(input.trim()!==''){
            setTodos([...todos,input]);
            setInput('')
        }
        
    }


  return (
   <>
   <input onChange={handleChange}type='text'/>
   <button onClick={addTodo} >Add</button>
   <ul>
    <button>Remove</button>
   </ul>




   </>

  )
}

export default TodoList