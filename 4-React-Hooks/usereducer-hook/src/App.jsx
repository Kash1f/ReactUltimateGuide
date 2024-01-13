import { useReducer } from "react";


const reducer = (state,action) => {

}

function App() {
  const [state, dispatch] = useReducer(reducer, {count:0});

  const handleClickInc = () => {
    set;
  };

  const handleClickDec = () => {
    setCount;
  };
  
  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </>
  );
}

export default App;
