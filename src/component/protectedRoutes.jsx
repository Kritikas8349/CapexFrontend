import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authToken"); // token check
  if (!token) {
    // agar token nahi hai to login page pe bhej do
    return <Navigate to="/loginform" replace />;
  }
  return children;
}

export default ProtectedRoute;
