import React from "react";
import { Navigate } from "react-router-dom";

// Esta función decodifica el token JWT para obtener los datos del usuario
const decodeToken = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (error) {
    console.error("Error al decodificar el token", error);
    return null;
  }
};

// Mapea los roles del backend al frontend
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

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found, redirecting to login.");
    return <Navigate to="/login" />;
  }

  const userData = decodeToken(token);  // Decodifica el token para obtener el usuario

  if (!userData) {
    console.log("Error decoding token, redirecting to login.");
    return <Navigate to="/login" />;
  }

  const userRole = mapRoleToName(userData.rol); // Obtén el rol del usuario

  console.log('User Role decoded from token:', userRole);

  if (roles && !roles.includes(userRole)) {
    console.log(`Role ${userRole} is not authorized for this route.`);
    return <Navigate to="/login" />;
  }

  return React.cloneElement(children, { user: userData });  // Pasa los datos del usuario como prop
};

export default ProtectedRoute;
