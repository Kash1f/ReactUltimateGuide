import { useState } from "react"


const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState('') //whatever we are currently editing

    function handleInputChange(event){
        setNewtask(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

  return (
    <>
    <div className="to-do-list">

    <h1>TodoList</h1>
    <div>
        <input
            type="text" 
            placeholder="Enter a Task..."
            value={newTask}
            onChange={handleInputChange}/>

            <button className="add-button">Add Task</button>
    </div>



    </div>
    </>
  )
}

export default TodoList