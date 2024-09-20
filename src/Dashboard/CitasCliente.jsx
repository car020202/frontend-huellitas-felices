import React from 'react';
import './CitasCliente.css'; // Estilos actualizados
import Navbar from "../Navbar/NavbarLogiado";

const CitasCliente = () => {
  const appointments = [
    { id: 1, date: '2024-09-20', time: '10:00 AM', pet: 'Fido', service: 'Consulta General', status: 'Confirmada' },
    { id: 2, date: '2024-09-22', time: '2:00 PM', pet: 'Whiskers', service: 'Vacunación', status: 'Pendiente' },
    { id: 3, date: '2024-09-25', time: '9:00 AM', pet: 'Buddy', service: 'Control de peso', status: 'Confirmada' },
    { id: 4, date: '2024-09-26', time: '11:00 AM', pet: 'Max', service: 'Chequeo dental', status: 'Pendiente' },
    { id: 5, date: '2024-09-27', time: '1:00 PM', pet: 'Bella', service: 'Consulta General', status: 'Confirmada' },
    { id: 6, date: '2024-09-28', time: '2:30 PM', pet: 'Charlie', service: 'Vacunación', status: 'Pendiente' },
    { id: 7, date: '2024-09-29', time: '10:00 AM', pet: 'Luna', service: 'Control de peso', status: 'Confirmada' },
    { id: 8, date: '2024-09-30', time: '4:00 PM', pet: 'Milo', service: 'Chequeo dental', status: 'Pendiente' },
    { id: 9, date: '2024-10-01', time: '11:30 AM', pet: 'Rocky', service: 'Consulta General', status: 'Confirmada' },
    { id: 10, date: '2024-10-02', time: '3:00 PM', pet: 'Lucy', service: 'Vacunación', status: 'Pendiente' },
    { id: 11, date: '2024-10-03', time: '9:30 AM', pet: 'Daisy', service: 'Control de peso', status: 'Confirmada' },
    { id: 12, date: '2024-10-04', time: '1:00 PM', pet: 'Bailey', service: 'Chequeo dental', status: 'Pendiente' },
    { id: 13, date: '2024-10-05', time: '11:00 AM', pet: 'Sadie', service: 'Consulta General', status: 'Confirmada' },
    { id: 14, date: '2024-10-06', time: '2:00 PM', pet: 'Oliver', service: 'Vacunación', status: 'Pendiente' },
    { id: 15, date: '2024-10-07', time: '10:30 AM', pet: 'Chloe', service: 'Control de peso', status: 'Confirmada' },
    { id: 16, date: '2024-10-08', time: '4:30 PM', pet: 'Leo', service: 'Chequeo dental', status: 'Pendiente' },
    { id: 17, date: '2024-10-09', time: '12:00 PM', pet: 'Coco', service: 'Consulta General', status: 'Confirmada' },
    { id: 18, date: '2024-10-10', time: '3:30 PM', pet: 'Jack', service: 'Vacunación', status: 'Pendiente' },
    { id: 19, date: '2024-10-11', time: '10:00 AM', pet: 'Zoe', service: 'Control de peso', status: 'Confirmada' },
    { id: 20, date: '2024-10-12', time: '11:00 AM', pet: 'Oscar', service: 'Chequeo dental', status: 'Pendiente' },
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
    </>
  );
};

export default CitasCliente;
