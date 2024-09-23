import React from "react";
import "./FormularioCita.css";
import Navbar from "../Navbar/NavbarEmpleado";
import imagenCita from "../assets/traetmeantsf.png"; // Asegúrate de importar la imagen correcta

const FormularioCita = () => {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="container">
          <div className="form-image">
            <img src={imagenCita} alt="Imagen cita" />
          </div>
          <div className="form-section">
            <h1>Crear Cita</h1>
            <form className="form">
              <label htmlFor="cliente">Cliente:</label>
              <select id="cliente" name="cliente" required>
                <option value="cliente">Kruma</option>
                <option value="cliente">Migue</option>
              </select>

              <label htmlFor="paciente">Paciente:</label>
              <select id="paciente" name="paciente" required>
                <option value="paciente">barra</option>
                <option value="paciente">chispitas</option>
              </select>

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
      </div>
    </>
  );
};

export default FormularioCita;
