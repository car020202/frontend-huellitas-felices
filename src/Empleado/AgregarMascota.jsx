import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Navbar from "../Navbar/NavbarEmpleado";
import Footer from "../Footer/Footer";
import "./AgregarMascota.css";
import axios from 'axios'; 

const AgregarMascota = () => {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('macho');
  const [idUsuario, setIdUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/pacientes", {
        nombre,
        especie,
        raza,
        edad: parseInt(edad, 10),
        sexo,
        id_usuario: idUsuario
      });

      if (response.status === 201) {
        setMensaje("Mascota agregada con éxito.");
        // Limpiar los campos del formulario
        setNombre('');
        setEspecie('');
        setRaza('');
        setEdad('');
        setSexo('macho');
        setIdUsuario('');

        // Redirigir al dashboard
       

      } else {
        setMensaje("Error al agregar la mascota.");
      }
    } catch (error) {
      setMensaje("Error en la solicitud.");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="background">
        <div className="overlay-container">
          <div className="form-container shadow">
            <h1>Agregar Mascota</h1>
            {mensaje && <p>{mensaje}</p>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el nombre de la mascota"
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="especie">Especie:</label>
                  <input
                    type="text"
                    id="especie"
                    name="especie"
                    className="form-control"
                    value={especie}
                    onChange={(e) => setEspecie(e.target.value)}
                    placeholder="Ingrese la especie (perro, gato, etc.)"
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="raza">Raza:</label>
                  <input
                    type="text"
                    id="raza"
                    name="raza"
                    className="form-control"
                    value={raza}
                    onChange={(e) => setRaza(e.target.value)}
                    placeholder="Ingrese la raza de la mascota"
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="edad">Edad:</label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    className="form-control"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    placeholder="Ingrese la edad en años"
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="sexo">Sexo:</label>
                  <select
                    id="sexo"
                    name="sexo"
                    className="form-control"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                  >
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                  </select>
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="cliente">Cliente:</label>
                  <select
                    id="cliente"
                    name="cliente"
                    className="form-control"
                    value={idUsuario}
                    onChange={(e) => setIdUsuario(e.target.value)}
                    required
                  >
                    <option value="">Seleccione un cliente</option>
                    {clientes.map((cliente) => (
                      <option key={cliente.id_usuario} value={cliente.id_usuario}>
                        {cliente.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Agregar Mascota
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

export default AgregarMascota;
