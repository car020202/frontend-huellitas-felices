import React, { useState } from "react";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import "./Factura.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Factura = ({ carrito }) => {
  const total = carrito.reduce((acc, producto) => {
    const precio = parseFloat(producto.precio) || 0;
    const cantidad = parseInt(producto.cantidad, 10) || 1;
    return acc + precio * cantidad;
  }, 0);

  const handleApprove = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3000/paypal/capture-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderID: data.orderID }),
        }
      );

      const captureData = await response.json();
      if (captureData.status === "COMPLETED") {
        console.log("Pago exitoso");
        // Redirige o muestra un mensaje de éxito
      } else {
        console.error("Error en la captura del pago:", captureData);
      }
    } catch (error) {
      console.error("Error al capturar el pago:", error);
    }
  };

  return (
    <>
      <Navbar carrito={carrito} />
      <div className="background">
        <div className="container overlay-factura">
          <h1 className="text-center mb-4">Carrito de Compras</h1>
          <div className="productos-y-paypal">
            <ul className="list-group lista-productos">
              {carrito.map((producto, index) => {
                const precio = parseFloat(producto.precio) || 0;
                const cantidad = parseInt(producto.cantidad, 10) || 1;

                return (
                  <li
                    key={index}
                    className="list-group-item product-item mb-3 shadow-sm p-3 bg-white rounded"
                  >
                    <div className="product-content">
                      <img
                        src={`http://localhost:3000${producto.image_url}`}
                        alt={producto.nombre}
                        className="product-img"
                      />
                      <div className="product-info ms-3">
                        <h5>{producto.nombre}</h5>
                        <p className="text-muted mb-0">
                          Precio: ${precio.toFixed(2)}
                        </p>
                        <p className="text-muted mb-0">Cantidad: {cantidad}</p>
                      </div>
                    </div>
                    <div className="precio-yeliminar">
                      <span className="badge rounded-pill bg-light text-dark">
                        ${(precio * cantidad).toFixed(2)}
                      </span>
                      <button
                        className="btn-elmpro btn-danger ms-3"
                        onClick={() => handleRemoveProduct(index)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="paypalcontainer">
              <div className="total-section text-center mt-4">
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>
              <div className="text-center mt-4">
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AYx_hnrzeDEST-rreoNvzDGYRIDUio5Dg5zmJoop_Wsl0XRcS2geyHm62fx2yk5W8s4wrw5wFUMkfJBG",
                  }}
                >
                  <PayPalButtons
                    createOrder={async () => {
                      try {
                        const response = await fetch(
                          "http://localhost:3000/paypal/create-order",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ total: total.toFixed(2) }),
                          }
                        );

                        const orderData = await response.json();
                        console.log("Orden creada:", orderData);

                        if (orderData.id) {
                          return orderData.id;
                        } else {
                          console.error(
                            "Error en la creación de la orden:",
                            orderData
                          );
                          throw new Error("Error en la creación de la orden");
                        }
                      } catch (error) {
                        console.error("Error al crear la orden:", error);
                      }
                    }}
                    onApprove={handleApprove}
                    onError={(err) => console.error("Error en PayPal:", err)}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Factura;
