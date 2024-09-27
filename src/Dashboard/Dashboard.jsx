import React from "react";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import Chatbot from "./Chatbot"; // Importamos el Chatbot
import "./Dashboard.css";
import dogImage from "../assets/perritohome.png";
import backgroundShapes from "../assets/fondo.png";
import datingImage from "../assets/hola1.jpg";
import consultationsImage from "../assets/perro2.png";
import productsImage from "../assets/gato.png";
import crearcita from "../assets/crearcita.webp";
import TreatmentsImage from "../assets/traetmeantsf.png";
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
      
      <div className="dashboard">
        {/* Aquí se agrega el Chatbot debajo del banner o donde lo desees */}
        <Chatbot />
      </div>
      
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
          <img src={crearcita} alt="Agendar Cita" />
          <div className="card-text">
            <h3>Agendar cita</h3>
            <p>Agenda fácilmente las citas de tu mascota.</p>
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
            <a href="/cliente/tratamientos" className="treatment-go-button">
              Ir
            </a>
          </div>
        </div>
      </section>

      <section className="contact-sectionc">
        <div className="contact-containerc">
          <div className="contact-detailsc">
            <div className="contact-infoc">
              <div className="contact-iconc">
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

      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Ubicación Huellitas Felices"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.7106763419596!2d-89.56495008465802!3d13.994508290539616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e9ed84fa9a5f%3A0x3b769120c1e90752!2s10a%20Avenida%20Sur%2C%20Santa%20Ana!5e0!3m2!1ses!2ssv!4v1630625889447!5m2!1ses!2ssv"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
