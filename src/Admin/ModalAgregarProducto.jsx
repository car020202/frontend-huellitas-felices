import React, { useState } from 'react';
import './ModalAgregarProducto.css';

const ModalAgregarProducto = ({ show, handleClose, agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [existencias, setExistencias] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null); 

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('existencias', existencias);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    
    agregarProducto(formData);
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="existencias">Existencias:</label>
            <input
              type="number"
              id="existencias"
              value={existencias}
              onChange={(e) => setExistencias(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen del producto:</label>
            <input
              type="file"
              id="imagen"
              onChange={(e) => setImagen(e.target.files[0])} 
              required
            />
          </div>
          <button type="submit" className="btn-submit">Agregar Producto</button>
        </form>
        <button className="btn-close" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalAgregarProducto;
