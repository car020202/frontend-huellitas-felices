import React from 'react';
import './ProductoDetalle.css'; // Archivo CSS para los estilos
import Navbar from "../Navbar/NavbarLogiado";
import producto1Img from '../assets/producto1.webp';


const ProductoDetalle = () => {
  // Información de ejemplo de producto
  const producto = {
    id: 1,
    nombre: 'Alimento para Gatos',
    descripcion: 'Alimento balanceado y nutritivo para gatos.',
    precio: 15.99,
    imagen: producto1Img, 
  };

  return (
    <>
    <Navbar />
    <div className="producto-detalle-container">
      <div className="producto-detalle">
        {/* Imagen del producto */}
        <div className="producto-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        {/* Detalles del producto */}
        <div className="producto-informacion">
          <h1>{producto.nombre}</h1>
          <p className="producto-descripcion">{producto.descripcion}</p>
          <p className="producto-precio">${producto.precio.toFixed(2)}</p>

          {/* Botón para agregar al carrito */}
          <button className="btn-agregar-carrito">Agregar al Carrito</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductoDetalle;
