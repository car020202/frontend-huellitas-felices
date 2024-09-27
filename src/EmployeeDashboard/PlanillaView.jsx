import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./PlanillaView.css";
import logo from "../assets/huellitas.png"; // Asegúrate de que la ruta sea correcta

function PlanillaView() {
  const [planillas, setPlanillas] = useState([]); // Estado para almacenar las planillas
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para obtener las planillas desde el backend
  const obtenerPlanillas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/planilla"); // Asegúrate de que la ruta sea correcta
      setPlanillas(response.data); // Guardamos las planillas obtenidas en el estado
    } catch (error) {
      console.error("Error al obtener las planillas:", error);
      setError("Hubo un error al obtener las planillas");
    }
  };

  // useEffect para llamar a la función cuando el componente se monta
  useEffect(() => {
    obtenerPlanillas();
  }, []);

  // Función auxiliar para asegurarse de que el valor es un número
  const formatCurrency = (value) => {
    const number = parseFloat(value);
    return isNaN(number) ? "$0.00" : `$${number.toFixed(2)}`;
  };
//funcion del pdf
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
    doc.text(`Nombre: ${planilla.Usuario?.nombre || "Desconocido"}`, 14, 52);
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

  // Función para descargar todas las planillas en un solo PDF
  const downloadAllPDFs = () => {
    const doc = new jsPDF();

    // Recorrer cada planilla y añadirla al PDF
    planillas.forEach((planilla, index) => {
        if (index > 0) {
            doc.addPage(); // Agregar una nueva página para cada planilla después de la primera
        }

        // Agregar el logo al PDF
        doc.addImage(logo, "PNG", 14, 10, 30, 15); // Ajusta la posición y tamaño del logo

        // Título de la empresa
        doc.setFontSize(14);
        doc.text("Huellitas Felices", 60, 30, { align: "center" });

        // Título del documento
        doc.setFontSize(12);
        doc.text("Planilla de Empleados", 60, 40, { align: "center" });

        // Detalles
        doc.setFontSize(10);
        doc.text(`Nombre: ${planilla.Usuario?.nombre || "Desconocido"}`, 14, 52);
        doc.text(`Fecha de Pago: ${new Date(planilla.fecha_pago).toLocaleDateString()}`, 14, 62);
        doc.text(`Periodo Inicial: ${new Date(planilla.periodo_inicial).toLocaleDateString()}`, 14, 72);
        doc.text(`Periodo Final: ${new Date(planilla.periodo_fin).toLocaleDateString()}`, 14, 82);
        doc.text(`Salario Base: ${formatCurrency(planilla.salario_base)}`, 14, 92);
        doc.text(`Bonificaciones: ${formatCurrency(planilla.bonificaciones)}`, 14, 102);
        doc.text(`Deducciones: ${formatCurrency(planilla.deducciones)}`, 14, 112);
        doc.text(`Monto Total: ${formatCurrency(planilla.monto_total)}`, 14, 122);
        doc.text(`Método de Pago: ${planilla.metodo_pago}`, 14, 132);
        doc.text(`Estado de Pago: ${planilla.estado_pago}`, 14, 142);

        // Línea separadora
        doc.line(10, 146, 200, 146); // Línea horizontal
        doc.text("Gracias por su preferencia", 14, 150); // Mensaje de agradecimiento
    });

    // Descargar el PDF
    doc.save("planillas_empleados.pdf");
};



  return (
    <>
      <Navbar />
      <section className="planilla-section">
        <div className="planilla-container">
          <div className="header-container">
            <h2 className="planilla-title">Planilla</h2>
            <button onClick={downloadAllPDFs} className="download-all-button">
              Descargar Todas las Planillas como PDF
            </button>
          </div>
          {error && <p className="text-danger">{error}</p>}{" "}
          {/* Mostrar error si ocurre */}
          <table className="planilla-table">
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
                <th>Acciones</th> {/* Columna para acciones */}
              </tr>
            </thead>
            <tbody>
              {planillas.length > 0 ? (
                planillas.map((planilla) => (
                  <tr key={planilla.id_planilla}>
                    <td>{planilla.id_planilla}</td>
                    <td>{planilla.Usuario?.nombre || "Desconocido"}</td>
                    <td>
                      {new Date(planilla.fecha_pago).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(planilla.periodo_inicial).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(planilla.periodo_fin).toLocaleDateString()}
                    </td>
                    <td>{formatCurrency(planilla.salario_base)}</td>
                    <td>{formatCurrency(planilla.bonificaciones)}</td>
                    <td>{formatCurrency(planilla.deducciones)}</td>
                    <td>{formatCurrency(planilla.monto_total)}</td>
                    <td>{planilla.metodo_pago}</td>
                    <td>{planilla.estado_pago}</td>
                    <td>
                      <button
                        onClick={() => downloadPDF(planilla)}
                        className="download-button"
                      >
                        Descargar PDF
                      </button>{" "}
                      {/* Botón para cada planilla */}
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PlanillaView;
