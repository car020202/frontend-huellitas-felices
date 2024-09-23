import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
   
    return <Navigate to="/login" />;
  }

  try {
  
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = mapRoleToName(payload.rol); 

 
    if (roles && !roles.includes(userRole)) {
      return <Navigate to="/login" />;
    }

 
    return children;

  } catch (error) {
    console.error("Error al decodificar el token", error);
    return <Navigate to="/login" />;
  }
};


const mapRoleToName = (roleId) => {
  switch (roleId) {
    case 1:
      return "admin";
    case 2:
      return "empleado";
    case 3:
      return "usuario";
    case 4:
      return "contador";
    default:
      return "usuario";
  }
};

export default ProtectedRoute;
