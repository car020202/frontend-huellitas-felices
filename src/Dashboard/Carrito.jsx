import React from 'react';

const Carrito = ({ carrito }) => {
  return (
    <div className="carrito-container">
      <div className="container">
        <h2>Tu Carrito</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - {producto.precio}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Carrito;
