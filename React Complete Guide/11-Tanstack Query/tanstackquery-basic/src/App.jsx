import React from 'react'
import { useQuery } from '@tanstack/react-query'

const App = () => {

  const {} = useQuery({queryKey: ['todo'], queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos')})

  return (
    <div>
      
    </div>
  )
}

export default App

/*

1. When we need to get data from the server, we use the useQuery hook. It will get the data from an api endpoint and it will handle all the things related to fetching data for us. So, normally if we use axios or fetchapi, and you put it inside of a useEffect, you would have to manually create states for the data, the error, the status if its loading or not. For this case, useQuery hook will do all of that for us. So, we will not use useEffect at all.
The useQuery hook is a hook that allows us to fetch data from the server.

2. Everytime we have a query we need to specify the query key. A unique query key that will distinguish it from all other queries that we have in our app. The reason for that is when we deal with cache and we make changes to our data, and we manually change the cache, we want to change that data in all of the other queries that are querying this specific data. So, in order to that we pass in the same query key to all of them and react query will know if one of them have a change then we want to the change to occur on all of the other ones.

We will give query key of an array. The reason its an array is because we can pass multiple query keys when we work with more data.
Well we fetch data using fetchapi or axios in useQuery too but the other stuff is simplified in useQuery when the data is fetched. 

*/