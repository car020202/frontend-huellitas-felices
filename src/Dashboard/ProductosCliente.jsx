import React, { useState, useEffect } from 'react';
import './ProductosCliente.css'; // Estilos opcionales
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import axios from 'axios';

const ProductosCliente = ({ carrito, agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);

  // Obtener productos desde el servidor
  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/productos'); // Asegúrate de que este sea tu endpoint correcto
      setProductos(response.data); // Guardar los productos en el estado
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  // Obtener productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <header>
        <Navbar carrito={carrito} />
      </header>
      <div className="productos-info-container">
        <h2>Productos Veterinarios</h2>
        <div className="productos-info-list">
          {productos.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            productos.map((producto, index) => (
              <div key={index} className="producto-info-card">
                <img src={`http://localhost:3000${producto.image_url}`} alt={producto.nombre} className="producto-img" />
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p className="precio"><strong>Precio:</strong> ${producto.precio}</p>
                  <button className="btn-agregar-carrito" onClick={() => agregarAlCarrito(producto)}>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductosCliente;
