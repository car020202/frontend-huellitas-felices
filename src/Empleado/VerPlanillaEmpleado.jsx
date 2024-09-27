import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmpleado";
import Footer from "../Footer/Footer";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Importar el plugin autoTable
import axios from "axios"; // Importar Axios para las solicitudes HTTP
import "./VerPlanillaEmpleado.css";
import logo from "../assets/huellitas.png"; // Asegúrate de que la ruta sea correcta


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
   // Función auxiliar para asegurarse de que el valor es un número
   const formatCurrency = (value) => {
    const number = parseFloat(value);
    return isNaN(number) ? "$0.00" : `$${number.toFixed(2)}`;
  };

  // Función para generar y descargar el PDF para una planilla específica
  const downloadPDF = (planilla) => {
    const doc = new jsPDF();
    doc.setFontSize(14);

    // Agregar el logo al PDF
    doc.addImage(logo, "PNG", 14, 10, 30, 15); // (imagen, formato, x, y, ancho, alto)

    // Título de la empresa
    doc.text("Huellitas Felices", 60, 30, { align: "center" });

    // Título del documento
    doc.setFontSize(12);
    doc.text("Estado de Pago", 60, 40, { align: "center" });

    // Detalles
    doc.setFontSize(10);
    
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 62);

    // Separador
    doc.line(10, 66, 200, 66); // Línea horizontal
    let currentY = 72; // Variable para controlar la posición vertical

    // Ingresos
    doc.setFontSize(11);
    doc.text("INGRESOS", 14, currentY);
    currentY += 10; // Aumentar la posición Y
    doc.text(
      `Salario Base: ${formatCurrency(planilla.salario_base)}`,
      14,
      currentY
    );
    currentY += 10; // Aumentar la posición Y
    doc.text(
      `Bonificaciones: ${formatCurrency(planilla.bonificaciones)}`,
      14,
      currentY
    );
    currentY += 10; // Aumentar la posición Y

    // Separador
    currentY += 10; // Espacio antes de Deducciones
    doc.line(10, currentY - 5, 200, currentY - 5); // Línea horizontal
    doc.text("DEDUCCIONES", 14, currentY);
    currentY += 10; // Aumentar la posición Y
    doc.text(
      `Deducciones: ${formatCurrency(planilla.deducciones)}`,
      14,
      currentY
    );
    currentY += 10; // Aumentar la posición Y

    // Total
    currentY += 10; // Espacio antes del total
    doc.line(10, currentY - 5, 200, currentY - 5); // Línea horizontal
    doc.text(
      `Monto Total: ${formatCurrency(planilla.monto_total)}`,
      14,
      currentY
    );
    currentY += 10; // Aumentar la posición Y
    doc.text(`Método de Pago: ${planilla.metodo_pago}`, 14, currentY);
    currentY += 10; // Aumentar la posición Y
    doc.text(`Estado: ${planilla.estado_pago}`, 14, currentY);

    // Línea final
    currentY += 10; // Espacio antes de finalizar
    doc.line(10, currentY - 5, 200, currentY - 5); // Línea horizontal
    currentY += 10; // Aumentar la posición Y
    doc.text("Gracias por su preferencia", 14, currentY);

    // Descargar el PDF
    doc.save(`estado_pago_${planilla.id_planilla}.pdf`);
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
