import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate para manejar las rutas
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook para redirigir

  // Función para manejar el cierre de sesión
  const handleLogoutClick = () => {
    // Lógica para manejar el cierre de sesión (puedes limpiar localStorage, etc.)
    navigate("/login"); // Redirigir al login después de cerrar sesión
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo que redirige al inicio */}
          <Link className="navbar-brand" to="/employee">
            <img src={logo} alt="Veterinaria Logo" style={{ width: '40px', height: '40px' }} />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* Link que redirige al dashboard del empleado */}
                <Link className="nav-link active" aria-current="page" to="/employee">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                {/* Link que redirige a la vista de planillas */}
                <Link className="nav-link" to="/employee/planillas">
                  Ver Planilla
                </Link>
              </li>
              <li className="nav-item">
                {/* Link que redirige a la creación de planilla */}
                <Link className="nav-link" to="/employee/crear-planilla">
                  Crear Planilla
                </Link>
              </li>
              <li className="nav-item">
                {/* Botón para cerrar sesión */}
                <button className="nav-link btn btn-outline btn-login" onClick={handleLogoutClick}>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
