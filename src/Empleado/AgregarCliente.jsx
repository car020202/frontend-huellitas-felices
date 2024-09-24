import React from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import "./AgregarCliente.css";

const AgregarCliente = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="background">
        <div className="overlay-container">
          <div className="form-container">
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

              <button type="submit" className="btn-submit">
                Agregar Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarCliente;
