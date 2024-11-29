import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

// Layout Component
const Layout = () => (
  <>
    <Navbar /> {/* Navbar is rendered once here */}
    <Outlet /> {/* Outlet renders the matched child route */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/", // Layout route
    element: <Layout />, // Layout wraps all child routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;



