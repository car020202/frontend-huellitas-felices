import React from "react";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate
import Navbar from "../Navbar/NavbarAdmin";
import Footer from "../Footer/Footer";
import "./AdminDashboard.css";
import dogImage from "../assets/perritohome.png"; 
import backgroundShapes from "../assets/fondo.png";
import consultationsImage from "../assets/user.png";
import productsImage from "../assets/producto3.webp";
import locationIcon from "../assets/ubicacion_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/telefono_icon.svg";
import contactImage from "../assets/contact.png";

function Dashboard() {
  const navigate = useNavigate(); 

  
  const handleCreateUserClick = () => {
    navigate('/admin/crear-usuario');
  };

  const handleAddProductClick = () => {
    navigate('/admin/agregar-productos');
  };

  return (
    <>
     <header>
        <Navbar />
      </header>
      <section className="banner">
        <div className="banner-content">
          <h1>has iniciado como administrador.</h1>
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
        
        <div className="card" onClick={handleCreateUserClick}>
          <img src={consultationsImage} alt="Consultations" />
          <div className="card-text">
            <h3>Crear usuarios</h3>
            <p>Crea los usuarios/empleados</p>
          </div>
        </div>
        
        <div className="card" onClick={handleAddProductClick}> 
          <img src={productsImage} alt="Products" />
          <div className="card-text">
            <h3>Agregar Productos</h3>
            <p>Agrega productos para las mascotas.</p>
          </div>
        </div>
      </div>

      
      <Footer/>
    </>
  );
}

export default Dashboard;
