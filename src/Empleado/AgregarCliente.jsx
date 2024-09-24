import React from 'react';
//import './AgregarCliente.css'; // Importa los estilos de CSS
import Navbar from "../Navbar/NavbarEmpleado";

const AgregarCliente = () => {
  return (
    <>
      <Navbar />
      <div className="background"> {/* Clase de fondo agregada */}
        <div className="overlay-container">
          <div className="form-container">
            <h1>Agregar Usuario</h1>
            <form>
              {/* Nombre */}
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
                <label htmlFor="direccion">Direccion:</label>
                <input
                  type="direccion"
                  id="direccion"
                  name="direccion"
                  placeholder="Ingrese la direccion"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono:</label>
                <input
                  type="telefono"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingrese el Telefono"
                  required
                />
              </div>

              {/* Correo Electrónico */}
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

              {/* Rol */}
              <div className="form-group">
                <label htmlFor="rol">Rol:</label>
                <select id="rol" name="rol" required>
                  <option value="cliente">Cliente</option>
                </select>
              </div>

              {/* Mascota */}
              <div className="form-group">
                <label htmlFor="mascota">Agregue una mascota:</label>
                <input
                  type="text"
                  id="mascota"
                  name="mascota"
                  placeholder="Ingrese el nombre de la mascota"
                  required
                />
              </div>

              {/* Contraseña */}
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
