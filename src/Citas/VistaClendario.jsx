import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Navbar/NavbarLogiado";
import "./VistaClendario.css"; // Asegúrate de importar el archivo CSS

const VistaCalendarioCitas = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <Navbar />

      {/* Contenedor para el calendario */}
      <div className="container">
        <h1>Calendario de Citas</h1>
        <div className="calendar-container">
          <h2>Seleccionar Una Fecha</h2>
          <Calendar onChange={setValue} value={value} />
          <p>Fecha seleccionada: {value.toDateString()}</p>
        </div>
      </div>

      {/* Contenedor para la lista de citas, al final de la página */}
      <div className="container">
        <div className="lista-citas">
          <h2>Lista de Citas Programadas</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Doctor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-09-20</td>
                <td>10:00 AM</td>
                <td>Juan Pérez</td>
                <td>Dr. María Gómez</td>
                <td className="actions">
                  <button className="btn-edit">Editar</button>
                  <button className="btn-cancel">Cancelar</button>
                </td>
              </tr>
              <tr>
                <td>2024-09-21</td>
                <td>11:00 AM</td>
                <td>Ana López</td>
                <td>Dr. Juan González</td>
                <td className="actions">
                  <button className="btn-edit">Editar</button>
                  <button className="btn-cancel">Cancelar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VistaCalendarioCitas;
