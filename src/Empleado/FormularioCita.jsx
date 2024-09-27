import React, { useState, useEffect } from "react";
import "./FormularioCita.css";
import Navbar from "../Navbar/NavbarEmpleado";
import Footer from "../Footer/Footer";
import axios from "axios";
import imagenCita from "../assets/traetmeantsf.png";
import { useNavigate } from "react-router-dom";

const FormularioCita = () => {
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

  // Obtener el token JWT desde localStorage o sessionStorage
  const token = localStorage.getItem("token"); // Asegúrate de que el token esté guardado en el localStorage

  // Obtener los clientes (usuarios con rol 3)
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuario/clientes", {
          headers: {
            Authorization: `Bearer ${token}`, // Aquí se agrega el token en los headers
          },
        });
        setClientes(response.data);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };
    fetchClientes();
  }, [token]);

  // Obtener los doctores (usuarios con rol 2)
  useEffect(() => {
    const fetchDoctores = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuario/doctores", {
          headers: {
            Authorization: `Bearer ${token}`, // Aquí se agrega el token en los headers
          },
        });
        setDoctores(response.data);
      } catch (error) {
        console.error("Error fetching doctores:", error);
      }
    };
    fetchDoctores();
  }, [token]);

  // Obtener pacientes cuando se selecciona un cliente
  useEffect(() => {
    if (clienteSeleccionado) {
      const fetchPacientes = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/pacientes/cliente/${clienteSeleccionado}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Aquí se agrega el token en los headers
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
  }, [clienteSeleccionado, token]);

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
      const response = await axios.post(
        "http://localhost:3000/citas",
        {
          cliente: clienteSeleccionado,
          paciente: pacienteSeleccionado,
          doctor: doctorSeleccionado,
          fecha,
          hora,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Aquí se agrega el token en los headers
          },
        }
      );

      if (response.status === 201) {
        setMensaje("Cita creada con éxito.");
        navigate("/empleado/dashboard"); // Redirigir al dashboard
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
      <header>
        <Navbar />
      </header>
      <div className="background">
        <div className="container">
          <div className="form-image">
            <img src={imagenCita} alt="Imagen cita" />
          </div>
          <div className="form-section">
            <h1>Crear Cita</h1>
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
                <button type="submit" className="btnguardarce">
                  Guardar Cita
                </button>
                <button type="button" className="btn-cancel" onClick={() => navigate("/empleado/dashboard")}>
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

export default FormularioCita;
