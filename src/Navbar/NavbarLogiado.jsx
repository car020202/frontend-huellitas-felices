import React from "react";
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  // Función para manejar la redirección
  const handleLoginClick = () => {
    window.location.href = "./Login/Login"; // Cambia la ruta según tu configuración
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Agregamos el logo dentro del enlace de la marca */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Veterinaria Logo" style={{ width: '40px', height: '40px' }} />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tratamientos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Citas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                {/* Evento onClick para redirigir a la página de login */}
                <a className="nav-link btn btn-outline btn-login" href="#" onClick={handleLoginClick}>
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
