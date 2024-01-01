import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickInc = () => {
    set;
  };

  const handleClickDec = () => {
    setCount;
  };
  
  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleClickInc}></button>
      <button onClick={handleClickDec}></button>
    </>
  );
}

export default App;
