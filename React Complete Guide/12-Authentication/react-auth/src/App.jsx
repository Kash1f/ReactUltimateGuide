import React from "react";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
