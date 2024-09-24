import React, { useState } from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import "./AgregarCliente.css";

const AgregarCliente = () => {
  // Definir estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje de éxito o error
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal de éxito

  // Función para manejar el envío del formulario
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
          id_roles: 3 // El rol del cliente es 3, asegúrate de que esto es consistente en el backend
        }),
      });

      if (response.ok) {
        setMensaje("Cliente agregado con éxito.");
        setShowModal(true); // Mostrar el modal de éxito

        // Limpiar los campos del formulario después de agregar el cliente
        setNombre("");
        setCorreo("");
        setContraseña("");

        // Ocultar el modal después de unos segundos
        setTimeout(() => {
          setShowModal(false);
        }, 2000);

      } else {
        const errorResponse = await response.json();
        setMensaje(`Error al agregar el cliente: ${errorResponse.message}`);
      }
    } catch (error) {
      setMensaje("Error en la solicitud.");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="background">
        <div className="overlay-container">
          <div className="form-container">
            <h1>Agregar Cliente</h1>
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

              <button type="submit" className="btn-submit">
                Agregar Cliente
              </button>
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
