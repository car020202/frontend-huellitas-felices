import React, { useState } from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import "./AgregarCliente.css";
import imagenCliente from "../assets/sara.jpg"; // Asegúrate de cambiar esta ruta a la imagen correcta

const AgregarCliente = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/usuario/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          contraseña,
          id_roles: 3,
        }),
      });

      if (response.ok) {
        setMensaje("Cliente agregado con éxito.");
        setShowModal(true);
        setNombre("");
        setCorreo("");
        setContraseña("");

        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      } else {
        const errorResponse = await response.json();
        setError(`Error al agregar el cliente: ${errorResponse.message}`);
      }
    } catch (error) {
      setError("Error en la solicitud.");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="background">
        <div className="container">
          <div className="form-image">
            <img src={imagenCliente} alt="Imagen Cliente" />
          </div>
          <div className="form-section">
            <h1>Agregar Cliente</h1>
            {mensaje && <p>{mensaje}</p>}
            {error && <p className="error-message">{error}</p>} {/* Mostrar error si existe */}
            <form className="form" onSubmit={handleSubmit}>
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

              <div className="button-container">
                <button type="submit" className="btn-guardar">
                  Agregar Cliente
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      {showModal && (
        <div className="modal-success">
          <p>Cliente creado con éxito</p>
        </div>
      )}
    </>
  );
};

export default AgregarCliente;
