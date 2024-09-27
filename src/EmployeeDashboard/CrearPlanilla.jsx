import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./PlanillaForm.css"; 

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
    id_usuario: "", // Para el empleado seleccionado
  });

  const [mensaje, setMensaje] = useState(""); 
  const [usuarios, setUsuarios] = useState([]); 

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/planilla/create", formData);
      if (response.status === 201) {
        setMensaje("Planilla creada con éxito.");
      }
    } catch (error) {
      setMensaje("Error al crear la planilla.");
      console.error(error);
    }
  };

 
useEffect(() => {
  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/usuario/roles");  // Asegúrate de que esta URL esté correcta
      setUsuarios(response.data);  // Guarda los usuarios obtenidos en el estado
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };
  obtenerUsuarios();
}, []);


  return (
    <>
      <Navbar />
      <div className="form-backgroundcd">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="planilla-card p-5">
            <div className=" text-center">
              <h2>Crear Nueva Planilla</h2>
            </div>
            <div className="card-body">
              {mensaje && <p className="text-center text-success">{mensaje}</p>}
              <form onSubmit={handleSubmit} className="form-bootstrap">
                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
                    <label>Nombre del empleado:</label>
                    <select
                      name="id_usuario"
                      value={formData.id_usuario}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Seleccionar empleado</option>
                      {usuarios.map((usuario) => (
                        <option key={usuario.id_usuario} value={usuario.id_usuario}>
                          {usuario.nombre} (Rol: {usuario.id_roles})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Crear Planilla
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CrearPlanilla;
