import React from "react";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer"
import "./Dashboard.css";
import dogImage from "../assets/perritohome.png"; // Imagen del perro en el banner
import backgroundShapes from "../assets/fondo.png"; // Imagen de formas detrás del perro

// Aquí importamos las imágenes .de las cards
import datingImage from "../assets/hola1.jpg";
import consultationsImage from "../assets/perro2.png";
import productsImage from "../assets/gato.png";
import crearcita from "../assets/crearcita.webp";

// Aquí importamos las imágenes de la sección
import TreatmentsImage from "../assets/traetmeantsf.png";

// Importamos las imágenes de los íconos para la sección de Contacto
import locationIcon from "../assets/ubicacion_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/telefono_icon.svg";
import contactImage from "../assets/contact.png";

function Dashboard() {
  return (
    <>
      <Navbar />
      <section className="banner">
        <div className="banner-content">
          <h1>Cuidamos de tu mascota.</h1>
          <p>Descansa tranquilo, tu querido amigo está en buenas manos.</p>
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
        <a href="/cliente/citas" className="card">
          <img src={datingImage} alt="Dating" />
          <div className="card-text">
            <h3>Citas</h3>
            <p>Esté al tanto a las citas de su mascota</p>
          </div>
        </a>
        
        <a href="/cliente/productos" className="card">
          <img src={productsImage} alt="Products" />
          <div className="card-text">
            <h3>Productos</h3>
            <p>Productos para el cuidado de tu mascota.</p>
          </div>
        </a>

        <a href="/cliente/agendar-cita" className="card">
          <img src={crearcita} alt="crearcita" />
          <div className="card-text">
            <h3>Agendar cita</h3>
            <p></p>
          </div>
        </a>
      </div>

      <section className="treatments-section">
        <div className="treatments-content">
          <div className="treatments-image">
            <img
              src={TreatmentsImage}
              alt="Veterinarian and Dog"
              className="treatment-doctor-image"
            />
          </div>
          <div className="treatments-text">
            <h2>Tratamientos</h2>
            <p>Tratamientos disponibles en nuestra veterinaria.</p>
            <a href="#go" className="treatment-go-button">
              Ir
            </a>
          </div>
        </div>
      </section>

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
      <Footer />
    </>
  );
}

export default Dashboard;
