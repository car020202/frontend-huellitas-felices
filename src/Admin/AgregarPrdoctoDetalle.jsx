import React from "react";
import './AgregarProductoDetalle.css'; // Estilos opcionales
import Navbar from "../Navbar/NavbarAdmin";

const AgregarProductoDetalle = () => {
  return (
    <>
      <Navbar />

      {/* Contenedor principal con el overlay */}
      <div className="overlay-container">
        {/* Contenedor del formulario */}
        <div className="form-container">
          <h1>Agregar Producto</h1>
          <form className="product-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre del Producto:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" />
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">Descripción del Producto:</label>
              <textarea
                id="descripcion"
                name="descripcion"
                placeholder="Descripción del producto"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="precio">Precio:</label>
              <input type="text" id="precio" name="precio" placeholder="Precio del Producto" />
            </div>

            <div className="form-group">
              <label htmlFor="imagen">Imagen del Producto:</label>
              <input type="file" id="imagen" name="imagen" />
            </div>

            <button type="submit" className="btn-submit">Agregar Producto</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AgregarProductoDetalle;
