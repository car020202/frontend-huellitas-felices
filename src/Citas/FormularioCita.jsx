import React from "react";
import "./FormularioCita.css";
import Navbar from "../Navbar/NavbarLogiado";
import imagenCita from "../assets/planilla2.png"; // Asegúrate de importar la imagen correcta

const FormularioCita = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-image">
          <img src={imagenCita} alt="Imagen cita" />
        </div>
        <div className="form-section">
          <h1>Crear Cita</h1>
          <form className="form">
            <label htmlFor="paciente">Paciente:</label>
            <input type="text" id="paciente" name="paciente" required />

            <label htmlFor="doctor">Doctor:</label>
            <select id="doctor" name="doctor" required>
              <option value="dr-maria">Dr. María Gómez</option>
              <option value="dr-juan">Dr. Juan González</option>
            </select>

            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required />

            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" name="hora" required />

            {/* Contenedor para los botones */}
            <div className="button-container">
              <button type="submit" className="btn-submit">
                Guardar Cita
              </button>
              <button type="button" className="btn-cancel">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioCita;
