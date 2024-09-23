import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found, redirecting to login.");
    return <Navigate to="/login" />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = mapRoleToName(payload.rol); 

    console.log('User Role decoded from token:', userRole); 

    if (roles && !roles.includes(userRole)) {
      console.log(`Role ${userRole} is not authorized for this route.`);
      return <Navigate to="/login" />;
    }

    return children;

  } catch (error) {
    console.error("Error al decodificar el token", error);
    return <Navigate to="/login" />;
  }
};

  const mapRoleToName = (role) => {
    switch (role) {
      case "admin":
        return "admin";
      case "empleado":
        return "empleado";
      case "usuario":
        return "usuario";
      case "contador":
        return "contador";
      default:
        return "usuario";
    }
  };

export default ProtectedRoute;
