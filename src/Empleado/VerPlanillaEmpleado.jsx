import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import Footer from "../Footer/Footer";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Importar el plugin autoTable
import axios from "axios"; // Importar Axios para las solicitudes HTTP
import "./VerPlanillaEmpleado.css";

function VerPlanillaEmpleado() {
  const [payrollData, setPayrollData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); // Obtener el token almacenado

  // Decodificar el token para obtener el ID del usuario
  const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload;
    } catch (error) {
      console.error("Error al decodificar el token", error);
      return null;
    }
  };

  const userData = decodeToken(token); // Decodificar el token

  useEffect(() => {
    if (!userData) {
      console.error("No se pudo decodificar el token o no hay token.");
      setLoading(false);
      return;
    }

    const fetchPayrollData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/planilla/usuario/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Incluir el token en los headers
          },
        });
        setPayrollData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payroll data:", error);
        setLoading(false);
      }
    };
    

    fetchPayrollData();
  }, [userData, token]);

  // Función para generar y descargar el PDF para una planilla específica
  const downloadPDF = (item) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Planilla de Empleados", 14, 22);

    const headers = [
      "ID",
      "Fecha de Pago",
      "Periodo Inicial",
      "Periodo Final",
      "Salario Base",
      "Bonificaciones",
      "Deducciones",
      "Monto Total",
      "Método de Pago",
      "Estado de Pago",
    ];

    const rowData = [
      item.id_planilla,
      item.fecha_pago,
      item.periodo_inicial,
      item.periodo_fin,
      item.salario_base,
      item.bonificaciones,
      item.deducciones,
      item.monto_total,
      item.metodo_pago,
      item.estado_pago,
    ];

    doc.autoTable({
      head: [headers],
      body: [rowData],
      startY: 30,
      theme: "grid",
      headStyles: {
        fillColor: [255, 245, 221],
        textColor: [0, 0, 0],
      },
      styles: {
        cellWidth: "auto",
        minCellHeight: 10,
      },
      margin: { top: 20 },
    });

    doc.save(`planilla_empleado_${item.id_planilla}.pdf`);
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
                    <tr key={item.id_planilla}>
                      <td>{item.id_planilla}</td>
                      <td>{new Date(item.fecha_pago).toLocaleDateString()}</td>
                      <td>{new Date(item.periodo_inicial).toLocaleDateString()}</td>
                      <td>{new Date(item.periodo_fin).toLocaleDateString()}</td>
                      <td>${item.salario_base}</td>
                      <td>${item.bonificaciones}</td>
                      <td>${item.deducciones}</td>
                      <td>${item.monto_total}</td>
                      <td>{item.metodo_pago}</td>
                      <td>{item.estado_pago}</td>
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
