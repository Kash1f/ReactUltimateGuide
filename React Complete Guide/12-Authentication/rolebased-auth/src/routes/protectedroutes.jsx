import React, { useContext } from "react";
import { UserContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, roles }) => {
  const { role, authenticated } = useContext(UserContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoutes;
