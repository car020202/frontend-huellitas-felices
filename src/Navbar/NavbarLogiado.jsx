import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importamos Link y useNavigate
import logo from "../assets/huellitas.png"; // Logo de la veterinaria
import "./Navbar.css"; // Importa tu CSS para la barra de navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = ({ carrito = [] }) => {  // Aseguramos que el carrito sea un array por defecto
  const navigate = useNavigate(); // Usamos useNavigate para redirigir a la página de factura

  // Función para manejar la redirección al login
  const handleLoginClick = () => {
    localStorage.removeItem("token"); // Limpiar token de sesión si es necesario
    navigate("/login"); // Redirige a la página de login
  };

  // Redirigir al carrito (Factura)
  const handleCarritoClick = () => {
    navigate("/cliente/factura"); // Redirigir a la vista de Factura
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
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
                <Link className="nav-link active" aria-current="page" to="/dashboard">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cliente/tratamientos">
                  Tratamientos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cliente/citas">
                  Citas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cliente/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                {/* Navlink para Ver Carrito con logo y número de artículos */}
                <a className="nav-link" onClick={handleCarritoClick} title="Ver Carrito">
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
                    alt="Carrito"
                  />
                  <span className="carrito-count">{carrito.length}</span> {/* Muestra el número de productos */}
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
