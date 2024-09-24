import React from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./EmployeeDashboard.css"; // Asegúrate de tener el archivo CSS correspondiente

// Importamos las imágenes de las cards
import planillaImage from "../assets/planilla.jpg";
import crearPlanillaImage from "../assets/crearplanilla.webp";

// Importamos las imágenes de los íconos para la sección de Contacto
import locationIcon from "../assets/ubicacion_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/telefono_icon.svg";
import contactImage from "../assets/contact.png";

function EmployeeDashboard() {
  return (
    <>
      <Navbar />
      <section className="banner">
        <div className="banner-content">
          <h1>Iniciaste Sesión como Contador</h1>
          <p>Bienvenido a la vista del empleado, donde podrás gestionar planillas y más.</p>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <Link to="/employee/planillas" className="card-link">
            <img src={planillaImage} alt="Ver Planilla" />
            <div className="card-text">
              <h3>Ver Planilla</h3>
              <p>Consulta las planillas de empleados.</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/employee/crear-planilla" className="card-link">
            <img src={crearPlanillaImage} alt="Crear Planilla" />
            <div className="card-text">
              <h3>Crear Planilla</h3>
              <p>Genera una nueva planilla para un empleado.</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-info">
              <div className="contact-icon">
                <img src={locationIcon} alt="Location Icon" className="contact-icon-image" />
              </div>
              <p>10a avenida sur y 23a Calle Poniente, Santa Ana</p>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <img src={emailIcon} alt="Email Icon" className="contact-icon-image" />
              </div>
              <p>huellitasfelices@c.com</p>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <img src={phoneIcon} alt="Phone Icon" className="contact-icon-image" />
              </div>
              <p>7777-7777</p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src={contactImage} alt="Dog" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default EmployeeDashboard;
