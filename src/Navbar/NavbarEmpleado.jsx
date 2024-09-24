import React from "react";
import { useNavigate } from "react-router-dom";  
import logo from "../assets/huellitas.png"; 
import "./Navbar.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const navigate = useNavigate();  

  // Función para manejar la redirección al login
  const handleLoginClick = () => {
    localStorage.removeItem("token"); // Eliminar token o datos de sesión si es necesario
    navigate("/login"); // Redirige a la página de login
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Veterinaria Logo" style={{ width: '40px', height: '40px' }} />
            <span className="ms-2">Veterinaria</span> {/* Agrega el nombre si lo deseas */}
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
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/crear-usuario">
                  Crear Usuario
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregar-mascota">
                  Agregar Mascota
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/calendario-citas">
                  Ver Calendario de Citas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/crear-cita">
                  Crear Cita
                </a>
              </li>
              <li className="nav-item">
                {/* Evento onClick para cerrar sesión y redirigir */}
                <a className="btn btn-outline btn-login" onClick={handleLoginClick}>
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
