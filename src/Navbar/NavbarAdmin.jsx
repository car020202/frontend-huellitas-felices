import React from "react";
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Veterinaria Logo" style={{ width: '40px', height: '40px' }} />
          </a>

          {/* Botón de hamburguesa para móviles */}
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

          {/* Enlaces de la navbar */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/admin">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/crear-usuario">Crear Usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/agregar-productos">Agregar Productos</a>
              </li>
              <li className="nav-item">
  <a className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
    Cerrar Sesión
  </a>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
