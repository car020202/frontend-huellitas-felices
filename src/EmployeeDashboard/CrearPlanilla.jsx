import React, { useState } from "react";
import Navbar from "../Navbar/NavbarLogiado";
import perro from "../assets/perro.png";
import "./CrearPlanilla.css"; // Puedes usar estilos personalizados o solo Bootstrap

function CrearPlanilla() {
  const [formData, setFormData] = useState({
    fecha_pago: "",
    periodo_inicial: "",
    periodo_fin: "",
    salario_base: "",
    bonificaciones: "",
    deducciones: "",
    monto_total: "",
    metodo_pago: "",
    estado_pago: "",
    id_usuario: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí envías los datos a la API para crear la planilla
  };

  return (
    <>
      <Navbar />

      <div className="planilla-container">
        <div className="image-container">
          <img src={perro} alt="Perro" className="dog-image" />
        </div>
        <div className="form-container">
          <h2>Crear Nueva Planilla</h2>
          <form onSubmit={handleSubmit} className="form-planilla">
            <div className="form-group">
              <label>Fecha de Pago:</label>
              <input
                type="date"
                name="fecha_pago"
                value={formData.fecha_pago}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Periodo Inicial:</label>
              <input
                type="date"
                name="periodo_inicial"
                value={formData.periodo_inicial}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Periodo Final:</label>
              <input
                type="date"
                name="periodo_fin"
                value={formData.periodo_fin}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Salario Base:</label>
              <input
                type="number"
                step="0.01"
                name="salario_base"
                value={formData.salario_base}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Bonificaciones:</label>
              <input
                type="number"
                step="0.01"
                name="bonificaciones"
                value={formData.bonificaciones}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Deducciones:</label>
              <input
                type="number"
                step="0.01"
                name="deducciones"
                value={formData.deducciones}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Monto Total:</label>
              <input
                type="number"
                step="0.01"
                name="monto_total"
                value={formData.monto_total}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Método de Pago:</label>
              <input
                type="text"
                name="metodo_pago"
                value={formData.metodo_pago}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Estado de Pago:</label>
              <input
                type="text"
                name="estado_pago"
                value={formData.estado_pago}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>ID Usuario:</label>
              <input
                type="number"
                name="id_usuario"
                value={formData.id_usuario}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-block">
              Crear Planilla
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrearPlanilla;
