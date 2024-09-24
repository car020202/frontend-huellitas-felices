import React from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import "./Dashboard.css";
import dogImage from "../assets/perritohome.png"; // Imagen del perro en el banner
import backgroundShapes from "../assets/fondo.png"; // Imagen de formas detrás del perro

// Aquí importamos las imágenes .de las cards
import datingImage from "../assets/calendario.webp";
import CrearCitaImage from "../assets/crearcita.webp";

// Importamos las imágenes de los íconos para la sección de Contacto
import locationIcon from "../assets/ubicacion_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/telefono_icon.svg";
import contactImage from "../assets/contact.png";

// No necesitas la navbar aquí, ya que la usarás como un layout aparte

function Dashboard() {
  return (
    <>
      <Navbar />
      <section className="banner">
        <div className="banner-content">
          <h1>Cuidamos de las mascotas </h1>
          <p>has ingresado como empleado.</p>
        </div>
        <div className="banner-image">
          <img
            src={backgroundShapes}
            alt="Background shapes"
            className="background-shapes"
          />
          <img src={dogImage} alt="Dog" className="dog-image" />
        </div>
      </section>

      <div className="cards">
        <div className="card">
          <img src={datingImage} alt="Crear-Cliente" />
          <div className="card-text">
            <h3>Crear Clietes</h3>
            <p>Crear Clientes </p>
          </div>
        </div>

        <div className="card">
          <img src={datingImage} alt="Agregar-Mascota" />
          <div className="card-text">
            <h3>Agregar Mascota</h3>
            <p>Agrega Mascotas a los Clientess </p>
          </div>
        </div>
        <div className="card">
          <img src={datingImage} alt="vistaCalendario" />
          <div className="card-text">
            <h3>Ver Calendario de citas</h3>
            <p>Consulta las citas </p>
          </div>
        </div>
        <div className="card">
          <img src={CrearCitaImage} alt="CrearCita" />
          <div className="card-text">
            <h3>Crear Cita</h3>
            <p>Crear una Nueva cita</p>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-info">
              <div className="contact-icon">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="contact-icon-image"
                />
              </div>
              <p>10a avenida sur y 23a Calle Poniente, Santa Ana</p>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="contact-icon-image"
                />
              </div>
              <p>huellitasfelices@c.com</p>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="contact-icon-image"
                />
              </div>
              <p>7777-7777</p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src={contactImage} alt="Dog" />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
