import React from "react";
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
                  Crear Usuario
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Agregar Productos
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline" href="#">
                  Cerrar Sesion
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
