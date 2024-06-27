import { useCallback, useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const result = useMemo(function slowFunction()
   {
    let sum=0;
    for (let i = 0; i <= 10000000; i++) {
      sum +=i;
    }
    console.log("This is a slow function");
    return sum;
  },[count])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <br />
      <hr />
      <input type="text" value={input} onChange={handleInput} />
      <h1> Input: {input}</h1>
      <h3>{result}</h3>
    </>
  );
}

export default UseMemo;
