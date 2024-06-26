import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth?.authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
