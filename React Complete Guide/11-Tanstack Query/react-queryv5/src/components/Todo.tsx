import { useTodosId } from "../services/queries";

const Todo = () => {


  //calling the useTodos fn here which has been defined in the queries.ts file
  const todosIdsQuery = useTodosId();

//   //to check if my query is loading or not
//   if (todosIdsQuery.isPending) {
//     return <span>Loading...</span>;
//   }
//   //to check if my query has some error or not
//   if (todosIdsQuery.isError) {
//     return <span>Error</span>;
//   }

  return (
    <>
      {/* Tanstack query is intelligent enough to figure out that if the query is not in pending or error state then it must be in success state, so our data will be rendered */}

        <p>Query function status {todosIdsQuery.status}</p> 
      {todosIdsQuery.data?.map((id) => (
        <div>
        <p key={id}>{id}</p>
        </div>
      ))}
    </>
  );
};

export default Todo;


//data?.map this line of code means that the data can be undefined too, but if it is not undefined then it will be mapped to the component

