import React, { useState } from "react";
import axios from "axios"; 
import "./CrearUsuario.css"; 
import Navbar from "../Navbar/NavbarAdmin";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom"; 

const CrearUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('empleado'); 
  const [mensaje, setMensaje] = useState('');
  const [showModal, setShowModal] = useState(false); // Para controlar la visibilidad del modal
  const navigate = useNavigate(); // Hook para la redirección

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3000/usuario/create', {
        nombre,
        correo,
        contraseña,
        id_roles: mapRolToId(rol) 
      });

      // Mostrar el modal de éxito
      setShowModal(true);

      // Limpiar los campos del formulario
      setNombre('');
      setCorreo('');
      setContraseña('');
      setRol('empleado');

      // Ocultar el modal y redirigir al dashboard de admin después de 2 segundos
      setTimeout(() => {
        setShowModal(false);
        navigate("/admin");
      }, 2000);

    } catch (error) {
      console.error('Error al crear usuario:', error);
      setMensaje('Error al crear usuario. Por favor, intenta nuevamente.');
    }
  };

  const mapRolToId = (rol) => {
    switch (rol) {
      case "admin":
        return 1;
      case "empleado":
        return 2;
      case "usuario":
        return 3;
      case "contador":
        return 4;
      default:
        return 3; 
    }
  };

  return (
    <>
      <Navbar />
      <div className="background">
        <div className="overlay-container">
          <div className="form-containeradmin">
            <h1>Agregar Usuario/Empleado</h1>
            {mensaje && <p>{mensaje}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese el nombre completo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Ingrese el correo electrónico"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rol">Rol:</label>
                <select
                  id="rol"
                  name="rol"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                  required
                >
                  <option value="empleado">Empleado</option>
                  <option value="admin">Administrador</option>
                  <option value="contador">RH</option>
                  <option value="cliente">Cliente</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  placeholder="Ingrese la contraseña"
                  required
                />
              </div>

              <button type="submit" className="btn-guardar">
                Agregar Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>

     
      {showModal && (
        <div className="modal-success">
          <p>Usuario creado con éxito</p>
        </div>
      )}
      
    </>
  );
};

export default CrearUsuario;
