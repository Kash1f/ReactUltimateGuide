import { useEffect, useState } from "react";
import Movies from "./pages/Movies";
import axios from "axios";
import {getMovies} from "../src/services/GetService"

const App = () => {

  const [data, setData] = useState([]);



  const API = "https://omdapi.com/?i=tt";

  const getMoviesData = async () => {
    //always use try catch to handle errors
    try {

      //the response is stored in the variable when the promise is resolved, the await keyword waits for the promise to resolve, then the code inside the try block is executed, if the promise is rejected, the catch block is executed, and the error is logged to the console. 
      const response = await getMovies();
      console.log(response.data);
      setData(response.data); //setData will update the state variable data and this data will be the current data and state of the app
    } catch (error){
      console.log(error);
    }

  }
  //when the page loads, the useEffect runs once and the getMovies function is called, [] array to make sure that useEffect only runs once
  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <>
      <Movies />
    </>
  );
};

export default App;


/*

Now where to store that data? we will use the useState hook to store the data in the state variable, and we will use the useEffect hook to update the state variable when the data changes.

*/