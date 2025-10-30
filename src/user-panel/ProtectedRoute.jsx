import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token") || localStorage.getItem("isAuthenticated");

  // If user not logged in → redirect to login
  if (!token) {
    return <Navigate to="/loginform" replace />;
  }

  // Otherwise → show the protected page
  return children;
};

export default ProtectedRoute;
