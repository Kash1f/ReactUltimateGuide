import { useQuery } from "@tanstack/react-query";
import { getTodosIds } from "./api";


export function useTodosId(){
    return useQuery({
        queryKey: ['todosId'],
        queryFn: getTodosIds,
    })
}



/*

We have made 4 files, 1 for api, 1 for queries, 1 for types, 1 for mutations.

1. We have defined types into seaprate types->todo.ts file and then imported it to api.ts file, in api.ts file, we have defined the baseURL and api as a const and then created a new instance of axios using the api and passed the baseURL to it. Then we have defined the getTodosIds function which will return the todos ids from the api.

2. After api.tsx, we will import and call the getTodosIds function as queryFn inside the useQuery hook where we will have the queryKey also. All of this will be done inside useTodosId function which is exported from queries.ts file

3. After this, we will import the useTodosId function in the Todo.tsx file and call it.


*/      