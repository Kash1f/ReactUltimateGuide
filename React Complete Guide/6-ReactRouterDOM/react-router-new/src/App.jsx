import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/", // The path of the route
    element: <Home />, // The component to be rendered on this path
  },
  {
    path: "/about", // The path of the route
    element: <About />, // The component to be rendered on this path
  },
  {
    path: "/dashboard", // The path of the route
    element: <Dashboard />, // The component to be rendered on this path
  },
]);

const App = () => {
  return <div></div>;
};

export default App;
