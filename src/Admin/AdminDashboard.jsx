import React from "react";
import Navbar from "../Navbar/NavbarAdmin";
import "./AdminDashboard.css";
import dogImage from "../assets/perritohome.png"; // Imagen del perro en el banner
import backgroundShapes from "../assets/fondo.png"; // Imagen de formas detrás del perro

// Aquí importamos las imágenes .de las cards
;
import consultationsImage from "../assets/user.png";
import productsImage from "../assets/producto3.webp";

// Aquí importamos las imágenes de la sección
import TreatmentsImage from "../assets/traetmeantsf.png";

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
          <h1>Care for your pet</h1>
          <p>Rest easy, your beloved friend is in safe hands.</p>
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
          <img src={consultationsImage} alt="Consultations" />
          <div className="card-text">
            <h3>Crear usuarios</h3>
            <p>Be in control of your pet's or pets' inquiries.</p>
          </div>
        </div>
        <div className="card">
          <img src={productsImage} alt="Products" />
          <div className="card-text">
            <h3>Agregar Productos</h3>
            <p>Agrega productos para las mascotas.</p>
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
