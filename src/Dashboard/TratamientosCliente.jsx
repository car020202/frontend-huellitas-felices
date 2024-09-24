import React from 'react';
import './TratamientosCliente.css'; // Estilos actualizados
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";

// Imágenes para los tratamientos
import vacunacionImg from '../assets/vacunacion.webp';
import desparasitacionImg from '../assets/desparasitacion.webp';
import controlPesoImg from '../assets/control_peso.webp';
import chequeoDentalImg from '../assets/chequeo_dental.webp';
import consultaGeneralImg from '../assets/consulta_general.webp';

const TratamientosCliente = () => {
  const tratamientos = [
    {
      nombre: 'Vacunación',
      descripcion: 'Protege a tu mascota con las vacunas recomendadas.',
      detalles: 'Incluye vacunas contra la rabia, parvovirus, moquillo, entre otras.',
      imagen: vacunacionImg
    },
    {
      nombre: 'Desparasitación',
      descripcion: 'Elimina parásitos internos y externos de tu mascota.',
      detalles: 'Tratamiento con medicamentos orales o tópicos para controlar los parásitos.',
      imagen: desparasitacionImg
    },
    {
      nombre: 'Control de peso',
      descripcion: 'Controla el peso de tu mascota para mantenerla saludable.',
      detalles: 'Revisión de hábitos alimenticios y recomendaciones para mantener el peso adecuado.',
      imagen: controlPesoImg
    },
    {
      nombre: 'Chequeo dental',
      descripcion: 'Cuida la salud dental de tu mascota con chequeos regulares.',
      detalles: 'Incluye limpieza dental y revisión de encías.',
      imagen: chequeoDentalImg
    },
    {
      nombre: 'Consulta general',
      descripcion: 'Revisión general del estado de salud de tu mascota.',
      detalles: 'Consulta con un veterinario para realizar un chequeo general de tu mascota.',
      imagen: consultaGeneralImg
    },
  ];

  return (
    <>
      <Navbar />
      <div className="tratamientos-info-container">
        <h2>Información sobre Tratamientos</h2>
        <div className="tratamientos-info-list">
          {tratamientos.map((tratamiento, index) => (
            <div key={index} className="tratamiento-info-card">
              <img src={tratamiento.imagen} alt={tratamiento.nombre} className="tratamiento-img" />
              <div className="tratamiento-info">
                <h3>{tratamiento.nombre}</h3>
                <p>{tratamiento.descripcion}</p>
                <p><strong>Detalles:</strong> {tratamiento.detalles}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TratamientosCliente;
