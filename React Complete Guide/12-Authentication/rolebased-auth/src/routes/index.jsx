import React from "react";
import Unauthorized from "../pages/Unauthorized";
import Login from "../pages/Login";
import User from "../pages/User";
import Admin from "../pages/Admin";
import ProtectedRoutes from "./protectedroutes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/admin",
    element: <ProtectedRoutes roles={['admin']} children={<Admin/>} />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
export default router;
