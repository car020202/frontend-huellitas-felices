import React, { useState, useEffect } from "react";
import "./AgendarCita.css";
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";
import imagenCita from "../assets/traetmeantsf.png"; // Imagen
import axios from "axios"; // Para manejar peticiones al backend
import { useNavigate } from "react-router-dom";

const AgendarCita = () => {
  const [clientes, setClientes] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState("");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState("");
  const [doctorSeleccionado, setDoctorSeleccionado] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(""); // Para manejar errores de validación

  const navigate = useNavigate();

  // Obtener los clientes (usuarios con rol 3)
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuario/clientes");
        setClientes(response.data);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };
    fetchClientes();
  }, []);

  // Obtener los doctores (usuarios con rol 2)
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

  // Obtener pacientes cuando se selecciona un cliente
  useEffect(() => {
    if (clienteSeleccionado) {
      const fetchPacientes = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/pacientes/cliente/${clienteSeleccionado}`);
          setPacientes(response.data);
        } catch (error) {
          console.error("Error fetching pacientes:", error);
        }
      };
      fetchPacientes();
    }
  }, [clienteSeleccionado]);

  // Validar la fecha y la hora
  const validarFechaYHora = () => {
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fecha);

    // Validación para que la fecha sea mayor que la fecha actual
    if (fechaSeleccionada <= fechaActual) {
      setError("La fecha seleccionada debe ser posterior a la fecha actual.");
      return false;
    }

    // Validación para que la hora esté entre las 10:00 AM y las 8:00 PM
    const horaSeleccionada = parseInt(hora.split(":")[0], 10);
    if (horaSeleccionada < 10 || horaSeleccionada > 20) {
      setError("La hora debe estar entre las 10:00 AM y las 8:00 PM.");
      return false;
    }

    setError(""); // Limpiar errores si las validaciones pasan
    return true;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que la fecha y la hora sean válidas antes de enviar
    if (!validarFechaYHora()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/citas", {
        cliente: clienteSeleccionado,
        paciente: pacienteSeleccionado,
        doctor: doctorSeleccionado,
        fecha,
        hora,
      });

      if (response.status === 201) {
        setMensaje("Cita creada con éxito.");

        // Mostrar el mensaje durante 2 segundos y luego redirigir
        setTimeout(() => {
          navigate("/dashboard"); // Redirigir al dashboard después de 2 segundos
        }, 2000); // 2 segundos
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
            {error && <p className="error-message">{error}</p>} {/* Mostrar error si existe */}
            <form className="form" onSubmit={handleSubmit}>
              {/* Cliente */}
              <label htmlFor="cliente">Cliente:</label>
              <select
                id="cliente"
                name="cliente"
                value={clienteSeleccionado}
                onChange={(e) => setClienteSeleccionado(e.target.value)}
                required
              >
                <option value="">Seleccione un cliente</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id_usuario} value={cliente.id_usuario}>
                    {cliente.nombre}
                  </option>
                ))}
              </select>

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

              {/* Fecha */}
              <label htmlFor="fecha">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />

              {/* Hora */}
              <label htmlFor="hora">Hora:</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                required
              />

              {/* Botones */}
              <div className="button-container">
                <button type="submit" className="btn-submit">
                  Guardar Cita
                </button>
                <button type="button" className="btn-cancel" onClick={() => navigate("/dashboard")}>
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
