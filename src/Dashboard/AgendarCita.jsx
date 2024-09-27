import React, { useState, useEffect } from "react";
import "./AgendarCita.css";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import imagenCita from "../assets/traetmeantsf.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgendarCita = ({ user }) => {  // Recibe los datos del usuario logueado desde ProtectedRoute
  const [pacientes, setPacientes] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState("");
  const [doctorSeleccionado, setDoctorSeleccionado] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctores = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuario/doctores");
        setDoctores(response.data);
      } catch (error) {
        console.error("Error fetching doctores:", error);
      }
    };
    fetchDoctores();
  }, []);

  // Obtener los pacientes del usuario logueado
  useEffect(() => {
    if (user && user.id) {
      const fetchPacientes = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/pacientes/cliente/${user.id}`,  // Usa el ID del usuario logueado
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,  // Enviar el token en los headers
              },
            }
          );
          setPacientes(response.data);
        } catch (error) {
          console.error("Error fetching pacientes:", error);
        }
      };
      fetchPacientes();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/citas",
        {
          cliente: user.id,  // Usar el ID del cliente logueado
          paciente: pacienteSeleccionado,
          doctor: doctorSeleccionado,
          fecha,
          hora,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,  // Token en headers
          },
        }
      );

      if (response.status === 201) {
        setMensaje("Cita creada con éxito.");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setMensaje("Error al crear la cita.");
      }
    } catch (error) {
      console.error("Error creando la cita:", error);
      setMensaje("Error en la solicitud.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="background">
        <div className="container">
          <div className="form-image">
            <img src={imagenCita} alt="Imagen cita" />
          </div>
          <div className="form-section">
            <h1>Agendar Cita</h1>
            {mensaje && <p>{mensaje}</p>}
            {error && <p className="error-message">{error}</p>}
            <form className="form" onSubmit={handleSubmit}>
              {/* Mostrar el nombre del cliente logueado */}
              <label htmlFor="cliente">Cliente:</label>
              <input
                id="cliente"
                name="cliente"
                value={user ? user.nombre : ""}
                readOnly
                className="form-control"
              />

              {/* Paciente */}
              <label htmlFor="paciente">Paciente:</label>
              <select
                id="paciente"
                name="paciente"
                value={pacienteSeleccionado}
                onChange={(e) => setPacienteSeleccionado(e.target.value)}
                required
              >
                <option value="">Seleccione un paciente</option>
                {pacientes.map((paciente) => (
                  <option key={paciente.id_paciente} value={paciente.id_paciente}>
                    {paciente.nombre}
                  </option>
                ))}
              </select>

              {/* Doctor */}
              <label htmlFor="doctor">Doctor:</label>
              <select
                id="doctor"
                name="doctor"
                value={doctorSeleccionado}
                onChange={(e) => setDoctorSeleccionado(e.target.value)}
                required
              >
                <option value="">Seleccione un doctor</option>
                {doctores.map((doctor) => (
                  <option key={doctor.id_usuario} value={doctor.id_usuario}>
                    {doctor.nombre}
                  </option>
                ))}
              </select>

              <label htmlFor="fecha">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />

              <label htmlFor="hora">Hora:</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                required
              />

              <div className="button-container">
                <button type="submit" className="btn-guardarcc">
                  Guardar Cita
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgendarCita;
