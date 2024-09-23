import React from 'react';
//import './AgregarCliente.css'; // Importa los estilos de CSS
import Navbar from "../Navbar/NavbarLogiado";

const AgregarCliente = () => {
  return (
    <>
    <Navbar />
    <div className="overlay-container">
      <div className="form-container">
        <h1>Agregar Usuario</h1>
        <form>
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre completo" required />
          </div>

          {/* Correo Electrónico */}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Ingrese el correo electrónico" required />
          </div>

          {/* Rol */}
          <div className="form-group">
            <label htmlFor="rol">Rol:</label>
            <select id="rol" name="rol" required>
              
              
              <option value="cliente">Cliente</option>
              
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Mascota">Agrege una mascota:</label>
            <input type="email" id="email" name="email" placeholder="Ingrese el nombre de la mascota" required />
          </div>

          {/* Contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Ingrese la contraseña" required />
          </div>

          {/* Botón de envío */}
          <button type="submit" className="btn-submit">Agregar Usuario</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AgregarCliente;
