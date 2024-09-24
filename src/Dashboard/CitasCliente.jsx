import React from 'react';
import './CitasCliente.css'; // Estilos actualizados
import Navbar from "../Navbar/NavbarLogiado";
import Footer from "../Footer/Footer";

const CitasCliente = () => {
  const appointments = [
    { id: 1, date: '2024-09-20', time: '10:00 AM', pet: 'Fido', service: 'Consulta General', status: 'Confirmada' },
    { id: 2, date: '2024-09-22', time: '2:00 PM', pet: 'Whiskers', service: 'Vacunación', status: 'Pendiente' },
    { id: 3, date: '2024-09-25', time: '9:00 AM', pet: 'Buddy', service: 'Control de peso', status: 'Confirmada' },
    { id: 4, date: '2024-09-26', time: '11:00 AM', pet: 'Max', service: 'Chequeo dental', status: 'Pendiente' },
    
  ];

  return (
    <>
      <Navbar />
      <div className="appointments-container">
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-info">
                <h3>{appointment.pet}</h3>
                <p>Fecha: {appointment.date}</p>
                <p>Hora: {appointment.time}</p>
                <p>Servicio: {appointment.service}</p>
                <p className={`status ${appointment.status.toLowerCase()}`}>
                  Estado: {appointment.status}
                </p>
              </div>
              <div className="appointment-actions">
                {appointment.status === 'Pendiente' && (
                  <button className="confirm-button">Confirmar Cita</button>
                )}
                <button className="cancel-button">Cancelar Cita</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CitasCliente;
