import React, { useState, useEffect } from 'react';
import './AgregarProductos.css';
import Navbar from "../Navbar/NavbarAdmin";
import Footer from "../Footer/Footer";
import ModalAgregarProducto from './ModalAgregarProducto';
import ModalEditarStock from './ModalEditarStock'; // Importar el modal de edición de stock

const AgregarProductos = () => {
  const [productos, setProductos] = useState([]); 
  const [productoOculto, setProductoOculto] = useState([]);
  const [showModalAgregar, setShowModalAgregar] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


  


  // Obtener productos
  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:3000/productos'); 
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  // Ocultar o mostrar producto
  const toggleOcultarProducto = (index) => {
    setProductoOculto((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleAgregarProducto = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/productos/create', {
        method: 'POST',
        body: formData, // Enviar el objeto FormData directamente
      });
  
      // Verifica si la respuesta es correcta antes de intentar usar 'data'
      if (response.ok) {
        const data = await response.json(); // Esta es la parte que está fallando, asegúrate de definir 'data' aquí.
        console.log('Producto agregado:', data);
        setProductos((prev) => [...prev, data.producto]); 
        setShowModalAgregar(false); // Cerrar modal
      } else {
        const errorData = await response.json(); // Maneja el error si no es 2xx
        console.error('Error al agregar producto:', errorData);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  


  // Función para abrir el modal de editar stock
  const handleOpenModalEditarStock = (producto) => {
    setProductoSeleccionado(producto); // Establece el producto seleccionado para editar el stock
    setShowModalEditar(true); // Muestra el modal
  };

  // Función para actualizar el stock en el servidor
  const actualizarStock = async (Id_producto, nuevoStock) => { // Cambiar id por Id_producto
    try {
      const response = await fetch(`http://localhost:3000/productos/${Id_producto}/update-stock`, { // Usar Id_producto
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ existencias: nuevoStock }),
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        setProductos((prevProductos) => 
          prevProductos.map((p) => (p.Id_producto === Id_producto ? updatedProduct : p)) // Usar Id_producto
        );
        setShowModalEditar(false); // Cerrar el modal después de actualizar
      } else {
        console.error('Error al actualizar el stock');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    console.log("ID del producto a eliminar:", id); // Verifica que el ID sea correcto
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setProductos((prevProductos) => 
            prevProductos.filter((producto) => producto.Id_producto !== id)
          );
          alert("Producto eliminado con éxito");
        } else {
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };
  



  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="productos-info-container">
        <h2>Productos</h2>
        <button className="btn-add-product" onClick={() => setShowModalAgregar(true)}>+</button>
        <div className="productos-info-list">
          {productos.length === 0 ? (
            <p>No hay productos agregados.</p>
          ) : (
            productos.map((producto, index) => (
              <div key={index} className="producto-info-card">
                <img src={`http://localhost:3000${producto.image_url}`} alt={producto.nombre} className="producto-img" />
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p className="precio"><strong>Precio: $</strong> {producto.precio}</p>
                  {/* Mostrar la cantidad de existencias */}
                  <p><strong>Existencias: </strong>{producto.existencias}</p>
                </div>


                {/* Botón para abrir el modal de editar stock */}
                <button className="btn-editar-stock" onClick={() => handleOpenModalEditarStock(producto)}>
                  Editar Stock
                </button>
                <button className="btn-danger btn-eliminar-producto" onClick={() => handleDeleteProduct(producto.Id_producto)}>
                  Eliminar Producto
                </button>
              </div>
            ))
          )}
        </div>
      </div>
  
      <ModalAgregarProducto
        show={showModalAgregar}
        handleClose={() => setShowModalAgregar(false)}
        agregarProducto={handleAgregarProducto} // Pasa la función aquí
      />


      {/* Modal para editar el stock */}
      {productoSeleccionado && (
        <ModalEditarStock
          show={showModalEditar}
          handleClose={() => setShowModalEditar(false)}
          producto={productoSeleccionado}
          actualizarStock={actualizarStock}
        />
      )}

      <Footer />
    </>
  );
};

export default AgregarProductos;
