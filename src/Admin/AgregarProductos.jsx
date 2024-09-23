import React, { useState } from 'react';
import './AgregarProductos.css'; // Estilos opcionales
import Navbar from "../Navbar/NavbarAdmin";

// Imágenes para los productos
import producto1Img from '../assets/producto1.webp';
import producto2Img from '../assets/producto2.webp';
import producto3Img from '../assets/producto3.webp';
import producto4Img from '../assets/producto4.webp';

const ProductosCliente = () => {
  // Definimos un estado para manejar el cambio de texto y color del botón
  const [productoOculto, setProductoOculto] = useState([]);

  const productos = [
    {
      nombre: 'Alimento para Gatos',
      descripcion: 'Alimento balanceado y nutritivo para gatos.',
      precio: '$15.99',
      imagen: producto1Img
    },
    {
      nombre: 'Shampoo para Perros',
      descripcion: 'Shampoo especial para el cuidado de la piel y el pelaje de tu perro.',
      precio: '$10.99',
      imagen: producto2Img
    },
    {
      nombre: 'Juguete para Mascotas',
      descripcion: 'Juguete interactivo para mantener activa a tu mascota.',
      precio: '$8.99',
      imagen: producto3Img
    },
    {
      nombre: 'Antipulgas',
      descripcion: 'Tratamiento antipulgas para perros y gatos.',
      precio: '$12.99',
      imagen: producto4Img
    },
  ];

  // Función para alternar el estado del botón de ocultar/mostrar
  const toggleOcultarProducto = (index) => {
    setProductoOculto((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Alternamos entre ocultar y mostrar
      return newState;
    });
  };

  return (
    <>
      <Navbar />
      <div className="productos-info-container">
        <h2>Productos</h2>
        <button className="btn-add-product">+</button> {/* Botón de agregar */}
        <div className="productos-info-list">
          {productos.map((producto, index) => (
            <div key={index} className="producto-info-card">
              <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p className="precio"><strong>Precio:</strong> {producto.precio}</p>
                
              </div>
              <button
                  className={`btn-ocultar-producto ${productoOculto[index] ? 'mostrar' : ''}`}
                  onClick={() => toggleOcultarProducto(index)}
                >
                  {productoOculto[index] ? 'Mostrar producto' : 'Ocultar'}
                </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductosCliente;
