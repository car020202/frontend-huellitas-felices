import React from "react";
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  // Función para manejar la redirección
  const handleLoginClick = () => {
    window.location.href = "./Login/Login"; // Cambia "/login" por la ruta o archivo correcto
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Agregamos el logo dentro del enlace de la marca */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Veterinaria Logo" style={{ width: '40px', height: '40px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Treatments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dating
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Consultations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {/* Evento onClick para redirigir a la página de login */}
                <a className="nav-link" href="#" onClick={handleLoginClick}>
                  Login
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
