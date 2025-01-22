import { useTodosId } from "../services/queries";


const Todo = () => {


    const todosIdsQuery = useTodosId();

    if(todosIdsQuery.isPending){
        return <span>Loading...</span>
    }
    if(todosIdsQuery.isError){
        return <span>Error</span>
    }
    if(todosIdsQuery.isSuccess){
        return <span>Success</span>
    }

  return (
    <>
      
    </>
  )
}

export default Todo;
