import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from "../Navbar/NavbarEmpleado";
import './EditarCita.css'; // Asegúrate de importar el archivo CSS
import imagenCita from '../assets/gatoeditarcita.png'; // Importa la imagen que desees usar

const EditarCita = () => {
  return (
    <>
      <Navbar />
      <div className="background">
      <div className="container-editar-cita">
        {/* Imagen a la izquierda */}
        <div className="form-image">
          <img src={imagenCita} alt="Imagen Cita" />
        </div>

        {/* Formulario a la derecha */}
        <div className="form-container">
          <h1>Editar Cita</h1>
          <form className="formulario-editar">
            {/* Selección de fecha */}
            <div className="form-group">
              <label htmlFor="fecha">Fecha:</label>
              <Calendar />
            </div>

            {/* Selección de hora */}
            <div className="form-group">
              <label htmlFor="hora">Hora:</label>
              <input
                type="time"
                id="hora"
                required
              />
            </div>

            {/* Selección de paciente */}
            <div className="form-group">
              <label htmlFor="paciente">Paciente:</label>
              <input
                type="text"
                id="paciente"
                required
              />
            </div>

            {/* Selección de doctor */}
            <div className="form-group">
              <label htmlFor="doctor">Doctor:</label>
              <select
                id="doctor"
                required
              >
                <option value="Dr. María Gómez">Dr. María Gómez</option>
                <option value="Dr. Juan González">Dr. Juan González</option>
              </select>
            </div>

            {/* Botones de acción */}
            <div className="form-buttons">
              <button type="submit" className="btn-submit">Guardar Cambios</button>
              <button type="button" className="btn-cancel">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default EditarCita;
