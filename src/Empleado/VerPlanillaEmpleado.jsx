import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Importar el plugin autoTable
import "./VerPlanillaEmpleado.css";

function VerPlanillaEmpleado() {
  const [payrollData, setPayrollData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayrollData = async () => {
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
      ];

      setTimeout(() => {
        setPayrollData(data);
        setLoading(false);
      }, 1000);
    };

    fetchPayrollData();
  }, []);

  // Función para generar y descargar el PDF para una planilla específica
  const downloadPDF = (item) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Planilla de Empleados", 14, 22);

    // Encabezados de la tabla
    const headers = [
      "ID",
      "Nombre del Empleado",
      "Fecha de Pago",
      "Periodo Inicial",
      "Periodo Final",
      "Salario Base",
      "Bonificaciones",
      "Deducciones",
      "Monto Total",
      "Método de Pago",
      "Estado",
    ];

    // Datos de la planilla
    const rowData = [
      item.id,
      item.employeeName,
      item.paymentDate,
      item.startPeriod,
      item.endPeriod,
      item.baseSalary,
      item.bonuses,
      item.deductions,
      item.totalAmount,
      item.paymentMethod,
      item.status,
    ];

    // Usar autoTable para agregar la tabla
    doc.autoTable({
      head: [headers],
      body: [rowData],
      startY: 30, // Posición vertical para la tabla
      theme: "grid", // Estilo de la tabla (puede ser 'striped', 'grid', etc.)
      headStyles: {
        fillColor: [255, 245, 221], // Color de fondo para el encabezado
        textColor: [0, 0, 0], // Color del texto (negro)
      },
      styles: {
        cellWidth: "auto",
        minCellHeight: 10,
      },
      margin: { top: 20 },
    });

    // Descargar el PDF
    doc.save(`planilla_empleado_${item.id}.pdf`);
  };

  return (
    <>
      <Navbar />
      <section className="ver-planilla-section">
        <div className="ver-planilla-container">
          <h2>Planilla de Empleados</h2>
          {loading ? (
            <p>Cargando...</p>
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
                  <th>Acciones</th>
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
                      <td>
                        <button
                          onClick={() => downloadPDF(item)}
                          className="download-button"
                        >
                          Descargar PDF
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12">No hay planillas disponibles</td>
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
