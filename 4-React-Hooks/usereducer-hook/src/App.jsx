import { useReducer } from "react";


const reducer = (state,action) => {


}

function App() {
  const [state, dispatch] = useReducer(reducer, {count:0});

  const handleClickInc = () => {
    dispatch({type:"increment"});
  };

  const handleClickDec = () => {
    dispatch({type:"decrement"});
  };
  
  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </>
  );
}

export default App;
