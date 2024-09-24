import React from "react";
import Footer from "../Footer/Footer"; // Importamos el Footer
import Navbar from "../Navbar/NavbarLogiado";
import "./Factura.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Factura() {
  return (
    <>
      <Navbar />
      <div className="background">
        {" "}
        {/* Fondo principal */}
        <div className="overlay">
          {" "}
          {/* Overlay transparente */}
            <h2 className="text-center mb-4">Carrito de Compras</h2>
            <ul className="list-group">
              <li className="list-group-item product-item mb-3 shadow-sm p-3 bg-white rounded">
                <div className="product-content">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Producto 1"
                    className="product-img"
                  />
                  <div className="product-info">
                    <h5>Producto 1</h5>
                    <p className="mb-0 text-muted">Precio: $10.00</p>
                    <p className="mb-0 text-muted">Cantidad: 1</p>
                  </div>
                </div>
                <span className="badge rounded-pill">$10.00</span>
              </li>

              <li className="list-group-item product-item mb-3 shadow-sm p-3 bg-white rounded">
                <div className="product-content">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Producto 2"
                    className="product-img"
                  />
                  <div className="product-info">
                    <h5>Producto 2</h5>
                    <p className="mb-0 text-muted">Precio: $20.00</p>
                    <p className="mb-0 text-muted">Cantidad: 2</p>
                  </div>
                </div>
                <span className="badge rounded-pill">$40.00</span>
              </li>

              <li className="list-group-item product-item mb-3 shadow-sm p-3 bg-white rounded">
                <div className="product-content">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Producto 3"
                    className="product-img"
                  />
                  <div className="product-info">
                    <h5>Producto 3</h5>
                    <p className="mb-0 text-muted">Precio: $30.00</p>
                    <p className="mb-0 text-muted">Cantidad: 1</p>
                  </div>
                </div>
                <span className="badge rounded-pill">$30.00</span>
              </li>
            </ul>

            <div className="text-center mt-4">
              <button className="btnpago btn-lg">Proceder al Pago</button>
            </div>
          </div>
        </div>
      <Footer /> {/* El footer siempre estará al final */}
    </>
  );
}

export default Factura;
