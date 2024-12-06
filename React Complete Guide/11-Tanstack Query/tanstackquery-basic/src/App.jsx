import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate } = useMutation({mutationFn: (newPost) => fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),})
    .then((res)=> res.json()),  //This is gonna be an object containing all the data
  })


      

  if (error) return <div>There is an Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {" "}

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
          {" "}
          <h4>ID:{todo.id}</h4>
          <h4>TITLE:{todo.title}</h4>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

/*

1. When we need to get data from the server, we use the useQuery hook. It will get the data from an api endpoint and it will handle all the things related to fetching data for us. So, normally if we use axios or fetchapi, and you put it inside of a useEffect, you would have to manually create states for the data, the error, the status if its loading or not. For this case, useQuery hook will do all of that for us. So, we will not use useEffect at all.
The useQuery hook is a hook that allows us to fetch data from the server.

2. Everytime we have a query we need to specify the query key. A unique query key that will distinguish it from all other queries that we have in our app. The reason for that is when we deal with cache and we make changes to our data, and we manually change the cache, we want to change that data in all of the other queries that are querying this specific data. So, in order to that we pass in the same query key to all of them and react query will know if one of them have a change then we want to the change to occur on all of the other ones.

We will give query key of an array. The reason its an array is because we can pass multiple query keys when we work with more data.
Well we fetch data using fetchapi or axios in useQuery too but the other stuff is simplified in useQuery when the data is fetched. 

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  })

Here, we are passing the query key as ["todo"]. This is the unique query key that we will use to distinguish this query from all other queries. We are also passing the query function which is a function that will return the data from the server. The query function is a function that will return a promise. So, we need to return a promise from the query function. 

3. The data that we get from the server is an array of objects. So, we need to map over the data and return a div for each object. We will use the key prop to give a unique key to each div. 

4. We will use the error prop to check if there is an error. If there is an error, we will return a div with the message "There is an Error". 

5. We will use the isLoading prop to check if the data is loading. If the data is loading, we will return a div with the message "Loading...". 

6. We will use the data?.map to map over the data and return a div for each object. We will use the key prop to give a unique key to each div.

Data Mutation:

useMutation hook is a hook that allows us to mutate data on the server. It will handle all the things related to mutating data for us.
useQuery se sirf data fetch ho satka hai while useMutation se data mutate means post, put, patch, delete ho satka hai.


Whenever we use call this function, we need to pass some arguments to it. Why is that? Because when we fetch data we don't need any arguments unless we are fetching by id or something, with mutating we need to add some data and send it through the body. So, we will need to pass the data that we want to mutate. And whenever we call this mutation, its gonna use this newData parameter as an argument to this function. 
After this we are gonna use fetch("abcd"). We will specify the HTTP method to be used for making this request, in this case we will use POST.

const {} = useMutation({mutationFn: (newData)=>    })    



*/
