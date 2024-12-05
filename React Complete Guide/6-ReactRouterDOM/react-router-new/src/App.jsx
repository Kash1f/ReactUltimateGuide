import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";
import MockTests from "./components/MockTests";
import Reports from "./components/Reports";

const router = createBrowserRouter([
  {
    path: "/", // The path of the route
    // The component to be rendered on this path
    element: 
      <>
        <Navbar />
        <Home />
      </>
    ,
  },
  {
    path: "/about", // The path of the route
    element: 
      <>
        <Navbar />
        <About />
      </>
    ,
  },
  {
    path: "/dashboard", // The path of the route
    element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,
    
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-tests",
        element: <MockTests />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "student/:id", // The path of the route
    element: 
      <>
        <Navbar />
        <ParamComp />
      </>
    ,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
