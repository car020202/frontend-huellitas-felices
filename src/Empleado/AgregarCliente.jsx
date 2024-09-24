import React from 'react';
import Navbar from "../Navbar/NavbarEmpleado";
import "./AgregarCliente.css";

const AgregarCliente = () => {
  return (
    <>
      <Navbar />
      <div className="background"> {/* Clase de fondo agregada */} 
        <div className="overlay-container">
          <div className="form-container">
            <h1>Agregar Cliente</h1>
            <form>
              <div className="form-grid">
                {/* Columna 1 */}
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese el nombre completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion">Dirección:</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    placeholder="Ingrese la dirección"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono:</label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    placeholder="Ingrese el teléfono"
                    required
                  />
                </div>
                {/* Columna 2 */}
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese el correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rol">Rol:</label>
                  <select id="rol" name="rol" required>
                    <option value="cliente">Cliente</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingrese la contraseña"
                    required
                  />
                </div>
              </div>
              {/* Botón de envío */}
              <button type="submit" className="btn-submit">Agregar Usuario</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarCliente;
