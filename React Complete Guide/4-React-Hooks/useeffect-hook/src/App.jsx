import React, { useEffect, useState } from 'react'
import UseEffect from './UseEffect'
import Cleanup from './Cleanup'
import Fetch from './Fetch'

const App = () => {

  useEffect(()=>{

      // Define an asynchronous function `fetchData`
      const fetchData = async () => {
        // The `async` keyword is used here to declare that this function will work asynchronously.
        // This means it will run some operations (like fetching data) without blocking the rest of the program.

        // The `await` keyword is used here to pause the execution of this function
        // until the fetch operation is complete. 
        // `fetch` is a promise-based function that sends a network request to the given URL.
        const response = await fetch(
          "https.//jsonplaceholder.typicode.com/posts/1"
        );
        // Once the fetch promise resolves, the next step is to convert the response into JSON format.
        // `await` is used again to wait for the JSON conversion to complete.
        const result = await response.json();

        // After the JSON has been parsed, it is logged to the console.
        console.log(result);        
      };

      // Call the `fetchData` function to actually run it.
      // Since `fetchData` is an asynchronous function, it returns a promise,
      // but here we are not using `await` to wait for it as it's being called within the useEffect hook.
      fetchData();

  // The empty dependency array `[]` means that this effect will only run once when the component mounts.
  },[]);
};



  return (
    <>
    {/* <Cleanup/> */}
    {/* <UseEffect/> */}
    {/* <Fetch/> */}

      


  </>

    )
export default App
