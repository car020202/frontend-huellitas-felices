import React from "react";
import Navbar from "../Navbar/NavbarEmpleado";
//import './AgregarMascota.css'; // Importa los estilos de CSS

const AgregarMascota = () => {
  return (
    <>
    <Navbar />
      <div className="overlay-container">
        <div className="form-container">
          <h1>Agregar Mascota</h1>
          <form>
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese el nombre de la mascota"
                required
              />
            </div>

            {/* Especie */}
            <div className="form-group">
              <label htmlFor="especie">Especie:</label>
              <input
                type="text"
                id="especie"
                name="especie"
                placeholder="Ingrese la especie (perro, gato, etc.)"
                required
              />
            </div>

            {/* Raza */}
            <div className="form-group">
              <label htmlFor="raza">Raza:</label>
              <input
                type="text"
                id="raza"
                name="raza"
                placeholder="Ingrese la raza de la mascota"
                required
              />
            </div>

            {/* Edad */}
            <div className="form-group">
              <label htmlFor="edad">Edad:</label>
              <input
                type="number"
                id="edad"
                name="edad"
                placeholder="Ingrese la edad en años"
                required
              />
            </div>

            {/* Sexo */}
            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <select id="sexo" name="sexo" required>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
              </select>
            </div>

            {/* Botón de envío */}
            <button type="submit" className="btn-submit">
              Agregar Mascota
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AgregarMascota;
