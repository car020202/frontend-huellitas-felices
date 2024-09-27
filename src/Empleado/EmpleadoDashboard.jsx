import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate
import Navbar from "../Navbar/NavbarEmpleado";
import "./EmpleadoDashboard.css";
import Footer from "../Footer/Footer";
import dogImage from "../assets/perritohome.png"; // Imagen del perro en el banner
import backgroundShapes from "../assets/fondo.png"; // Imagen de formas detrás del perro

// Aquí importamos las imágenes de las cards
import CalendarioImage from "../assets/calendario.webp";
import CrearCitaImage from "../assets/crearcita.webp";
import Planilla from "../assets/planilla.jpg";
import crearcliente from "../assets/sara.jpg";
import agregarmascota from "../assets/planilla2.png";

// Importamos las imágenes de los íconos para la sección de Contacto
import locationIcon from "../assets/ubicacion_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/telefono_icon.svg";
import contactImage from "../assets/contact.png";

function Dashboard() {
  const navigate = useNavigate(); // Usamos el hook para redirigir al hacer clic en las cards

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
        {/* Cada card ahora tiene un onClick para redirigir */}
        <div
          className="card"
          onClick={() => navigate("/empleado/agregar-cliente")}
        >
          <img src={crearcliente} alt="Crear-Cliente" />
          <div className="card-text">
            <h3>Crear Clientes</h3>
            <p>Crear Clientes </p>
          </div>
        </div>

        <div
          className="card"
          onClick={() => navigate("/empleado/agregar-mascota")}
        >
          <img src={agregarmascota} alt="Agregar-Mascota" />
          <div className="card-text">
            <h3>Agregar Mascota</h3>
            <p>Agrega Mascotas a los Clientes </p>
          </div>
        </div>

        <div className="card" onClick={() => navigate("/citas/calendario")}>
          <img src={CalendarioImage} alt="vistaCalendario" />
          <div className="card-text">
            <h3>Ver Calendario de citas</h3>
            <p>Consulta las citas </p>
          </div>
        </div>

        <div className="card" onClick={() => navigate("/citas/formulario")}>
          <img src={CrearCitaImage} alt="CrearCita" />
          <div className="card-text">
            <h3>Crear Cita</h3>
            <p>Crear una Nueva cita</p>
          </div>
        </div>

        <div
          className="card"
          onClick={() => navigate("/empleado/ver-planilla")}
        >
          <img src={Planilla} alt="Ver Planilla" />
          <div className="card-text">
            <h3>Ver Planilla</h3>
            <p>Ver tu planilla</p>
          </div>
        </div>
      </div>

      <section className="contact-sectionem">
        <div className="contact-containerem">
          <div className="contact-detailsem">
            <div className="contact-infoem">
              <div className="contact-iconem">
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
              <p>huellitasfelicesjc@gmail.com</p>
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
      <Footer />
    </>
  );
}

export default Dashboard;
