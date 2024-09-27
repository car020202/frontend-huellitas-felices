import React, { useState } from "react";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import "./Factura.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Factura = ({ carrito, setCarrito, usuario }) => {
  const [mensajePago, setMensajePago] = useState(""); 
  const [errorPago, setErrorPago] = useState(""); 

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
          body: JSON.stringify({
            orderID: data.orderID,
            carrito: carrito,
            usuarioId: usuario.id,
          }),
        }
      );

      const captureData = await response.json();

      if (captureData.message === "Pago completado") {
        setMensajePago("Compra exitosa");
        setCarrito([]);
      } else {
        setMensajePago("Error en el pago, pero su pedido fue registrado.");
        setCarrito([]); 
      }
    } catch (error) {
      console.error("Error al capturar el pago:", error);
      setMensajePago("Pago realizado con exito");
    }
  };

  // Función para eliminar producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index); // Filtramos el producto que no queremos
    setCarrito(nuevoCarrito); // Actualizamos el estado del carrito
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
                      {/* Usamos la función eliminarProducto aquí */}
                      <button
                        className="btn-elmpro btn-danger ms-3"
                        onClick={() => eliminarProducto(index)}
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

              {mensajePago ? (
                <div className="text-center mt-4">
                  <h4 className="text-success">{mensajePago}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-check-circle-fill text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0L13.5 5.57a.75.75 0 1 0-1.06-1.06L7.5 9.44 5.57 7.53a.75.75 0 1 0-1.06 1.06l2.5 2.5z" />
                  </svg>
                </div>
              ) : (
                <div className="text-center mt-4">
                  <PayPalScriptProvider
                    options={{
                      "client-id": "AYx_hnrzeDEST-rreoNvzDGYRIDUio5Dg5zmJoop_Wsl0XRcS2geyHm62fx2yk5W8s4wrw5wFUMkfJBG",
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

                          if (orderData.id) {
                            return orderData.id;
                          } else {
                            throw new Error("Error al crear la orden");
                          }
                        } catch (error) {
                          console.error("Error al crear la orden:", error);
                          setErrorPago("Error al procesar el pago.");
                        }
                      }}
                      onApprove={handleApprove}
                      onError={(err) => {
                        console.error("Error en PayPal:", err);
                        setErrorPago("Error al procesar el pago.");
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              )}

              {errorPago && <p className="text-danger">{errorPago}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Factura;
