import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";

const router = createBrowserRouter([
  {
    path: "/", // The path of the route
    // The component to be rendered on this path
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about", // The path of the route
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard", // The path of the route
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "student/:id", // The path of the route
    element: (
      <>
        <Navbar />
        <ParamComp />
      </>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
