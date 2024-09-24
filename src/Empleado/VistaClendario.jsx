import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Navbar/NavbarEmpleado";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./VistaClendario.css";

const VistaCalendarioCitas = () => {
  const [value, setValue] = useState(new Date());
  const [citas, setCitas] = useState([]);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const fetchCitasPorFecha = async (fechaSeleccionada) => {
    try {
      const response = await axios.get(`http://localhost:3000/citas/fecha/${fechaSeleccionada}`);
      setCitas(response.data);
    } catch (error) {
      console.error("Error fetching citas:", error);
    }
  };

  useEffect(() => {
    const fechaSeleccionada = formatDate(value);
    fetchCitasPorFecha(fechaSeleccionada);
  }, [value]);

  // Manejar el botón de finalizar cita
  const handleFinalizarCita = async (idCita) => {
    try {
      await axios.put(`http://localhost:3000/citas/${idCita}`, { estado: 'realizada' });
      const fechaSeleccionada = formatDate(value);
      fetchCitasPorFecha(fechaSeleccionada); // Recargar las citas después de actualizar
    } catch (error) {
      console.error("Error finalizando la cita:", error);
    }
  };

  // Manejar el botón de eliminar cita
  const handleCancelarCita = async (idCita) => {
    try {
      await axios.delete(`http://localhost:3000/citas/${idCita}`);
      const fechaSeleccionada = formatDate(value);
      fetchCitasPorFecha(fechaSeleccionada); // Recargar las citas después de eliminar
    } catch (error) {
      console.error("Error cancelando la cita:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="background">
        <div className="containerCalendario">
          <h1>Calendario de Citas</h1>
          <div className="calendar-container">
            <h2>Seleccionar Una Fecha</h2>
            <Calendar onChange={setValue} value={value} showNavigation={true} />
            <p>Fecha seleccionada: {value.toDateString()}</p>
          </div>
        </div>

        <div className="container">
          <div className="lista-citas">
            <h2>Citas Programadas para {value.toDateString()}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Cliente</th>
                  <th>Paciente</th>
                  <th>Doctor</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {citas.length > 0 ? (
                  citas.map((cita) => (
                    <tr key={cita.id_cita}>
                      <td>{cita.fecha}</td>
                      <td>{cita.hora}</td>
                      <td>{cita.cliente ? cita.cliente.nombre : "Sin cliente"}</td>
                      <td>{cita.paciente ? cita.paciente.nombre : "Sin paciente"}</td>
                      <td>{cita.doctor ? cita.doctor.nombre : "Sin doctor"}</td>
                      <td>{cita.estado}</td>
                      <td className="actions">
                        <button className="btn-fina" onClick={() => handleFinalizarCita(cita.id_cita)}>
                          Finalizar
                        </button>
                        <button className="btn-cancel" onClick={() => handleCancelarCita(cita.id_cita)}>
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No hay citas programadas para esta fecha.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VistaCalendarioCitas;
