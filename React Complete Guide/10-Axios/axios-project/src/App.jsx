import { useEffect } from "react";
import Movies from "./pages/Movies";
import axios from "axios";

const App = () => {
  const API = "https://omdapi.com/?i=tt";

  const getMovies = async () => {
    //always use try catch to handle errors
    try {

      //the response is stored in the variable when the promise is resolved, the await keyword waits for the promise to resolve, then the code inside the try block is executed, if the promise is rejected, the catch block is executed, and the error is logged to the console. 
      const response = await axios.get(API);
      console.log(response.data);

    } catch (error){
      console.log(error);
    }

  }
  //when the page loads, the useEffect runs once and the getMovies function is called, [] array to make sure that useEffect only runs once
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Movies />
    </>
  );
};

export default App;
