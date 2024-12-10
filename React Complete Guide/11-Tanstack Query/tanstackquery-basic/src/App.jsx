import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const App = () => {

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate, isError, isPending, isSuccess } = useMutation({mutationFn: (newPost) => fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),})
    .then((res)=> res.json()), //This is gonna be an object containing all the data
     onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["posts"]});
     }
  })


      

  if (error || isError) return <div>There is an Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      
      {/* If isPending is true, the right-hand side (<p>Data is being Added</p>) is rendered. If isPending is false, nothing is rendered. */}

      {isPending && <p>Data is being Added</p>}

      {/* we can have add posts button, we will not have user input, we will just hardcode the data into the request. */}

      <button onClick={()=> mutate(
        {
          "userId": 5000,
          "id": 4000,
          "title": "Hey there!",
          "body": "This is a test post"
        },
  )}>Add Posts</button>

      {data?.map((todo) => (
        <div key={todo.id}>
         
          <h4>ID:{todo.id}</h4>
          <h4>TITLE:{todo.title}</h4>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

