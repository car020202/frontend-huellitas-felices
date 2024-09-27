import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Navbar/NavbarLogiado"; // Ajusta esto según tu sistema de navegación
import Footer from "../Footer/Footer";
import axios from "axios";


const VistaCalendarioCitas = () => {
  const [value, setValue] = useState(new Date());
  const [citas, setCitas] = useState([]);

  // Formatear la fecha seleccionada para usar en la API
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Función para obtener citas por fecha
  const fetchCitasPorFecha = async (fechaSeleccionada) => {
    try {
      const response = await axios.get(`http://localhost:3000/citas/fecha/${fechaSeleccionada}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Token del usuario
        },
      });
      setCitas(response.data); // Actualizar el estado con las citas obtenidas
    } catch (error) {
      console.error("Error fetching citas:", error);
    }
  };

  // Ejecutar fetch cuando cambia la fecha seleccionada
  useEffect(() => {
    const fechaSeleccionada = formatDate(value);
    fetchCitasPorFecha(fechaSeleccionada);
  }, [value]);

  return (
    <>
      <Navbar />
      <div className="contenedorVC">
        <div className="containerCalendario1">
          <h1>Calendario de Citas</h1>
          <div className="calendar-container">
            <h2>Seleccionar Una Fecha</h2>
            <Calendar onChange={setValue} value={value} showNavigation={true} />
            <p>Fecha seleccionada: {value.toDateString()}</p>
          </div>
        </div>

        <div className="containervc">
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No hay citas programadas para esta fecha.</td>
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
