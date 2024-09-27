import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee"; 
import Footer from "../Footer/Footer";
import "./VerPlanillaEmpleado.css"; 

function VerPlanillaEmpleado() {
  const [payrollData, setPayrollData] = useState([]); // Estado para almacenar los datos de la planilla
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos

  useEffect(() => {
    // Simulando una llamada a un API para cargar los datos de la planilla
    const fetchPayrollData = async () => {
      // Aquí deberías reemplazarlo con la llamada a tu API
      const data = [
        {
          id: 1,
          employeeName: "Juan Pérez",
          paymentDate: "01/09/2024",
          startPeriod: "01/08/2024",
          endPeriod: "31/08/2024",
          baseSalary: 1000,
          bonuses: 200,
          deductions: 50,
          totalAmount: 1150,
          paymentMethod: "Transferencia",
          status: "Pagado",
        },
        // Puedes agregar más datos aquí
      ];
      
      // Simulación de tiempo de carga
      setTimeout(() => {
        setPayrollData(data);
        setLoading(false);
      }, 1000);
    };

    fetchPayrollData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="ver-planilla-section">
        <div className="ver-planilla-container">
          <h2>Planilla de Empleados</h2>
          {loading ? (
            <p>Cargando...</p> // Mensaje de carga mientras se obtienen los datos
          ) : (
            <table className="ver-planilla-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre del Empleado</th>
                  <th>Fecha de Pago</th>
                  <th>Periodo Inicial</th>
                  <th>Periodo Final</th>
                  <th>Salario Base</th>
                  <th>Bonificaciones</th>
                  <th>Deducciones</th>
                  <th>Monto Total</th>
                  <th>Método de Pago</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {payrollData.length > 0 ? (
                  payrollData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.employeeName}</td>
                      <td>{item.paymentDate}</td>
                      <td>{item.startPeriod}</td>
                      <td>{item.endPeriod}</td>
                      <td>${item.baseSalary}</td>
                      <td>${item.bonuses}</td>
                      <td>${item.deductions}</td>
                      <td>${item.totalAmount}</td>
                      <td>{item.paymentMethod}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11">No hay planillas disponibles</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default VerPlanillaEmpleado;
