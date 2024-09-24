import React, { useState } from 'react';
import './ModalEditarStock.css'; // Puedes crear estilos para este modal o usar los existentes

const ModalEditarStock = ({ show, handleClose, producto, actualizarStock }) => {
  const [nuevoStock, setNuevoStock] = useState(producto.existencias);

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarStock(producto.Id_producto, nuevoStock); // Cambiar id_producto a Id_producto
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Editar Stock para {producto.nombre}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="existencias">Nuevo Stock:</label>
            <input
              type="number"
              id="existencias"
              value={nuevoStock}
              onChange={(e) => setNuevoStock(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Actualizar Stock</button>
        </form>
        <button className="btn-close" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalEditarStock;
