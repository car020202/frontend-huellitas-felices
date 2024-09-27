import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./PlanillaView.css";

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

  // Función para generar y descargar el PDF para una planilla específica
  const downloadPDF = (planilla) => {
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
      planilla.id_planilla,
      planilla.Usuario?.nombre || "Desconocido",
      new Date(planilla.fecha_pago).toLocaleDateString(),
      new Date(planilla.periodo_inicial).toLocaleDateString(),
      new Date(planilla.periodo_fin).toLocaleDateString(),
      formatCurrency(planilla.salario_base),
      formatCurrency(planilla.bonificaciones),
      formatCurrency(planilla.deducciones),
      formatCurrency(planilla.monto_total),
      planilla.metodo_pago,
      planilla.estado_pago,
    ];

    // Usar autoTable para agregar la tabla
    doc.autoTable({
      head: [headers],
      body: [rowData],
      startY: 30, // Posición vertical para la tabla
      theme: "grid", // Estilo de la tabla
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
    doc.save(`planilla_empleado_${planilla.id_planilla}.pdf`);
  };

  // Función para descargar todas las planillas en un solo PDF
  const downloadAllPDFs = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Planillas de Empleados", 14, 22);

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

    // Usar autoTable para agregar la tabla
    doc.autoTable({
      head: [headers],
      body: planillas.map((planilla) => [
        planilla.id_planilla,
        planilla.Usuario?.nombre || "Desconocido",
        new Date(planilla.fecha_pago).toLocaleDateString(),
        new Date(planilla.periodo_inicial).toLocaleDateString(),
        new Date(planilla.periodo_fin).toLocaleDateString(),
        formatCurrency(planilla.salario_base),
        formatCurrency(planilla.bonificaciones),
        formatCurrency(planilla.deducciones),
        formatCurrency(planilla.monto_total),
        planilla.metodo_pago,
        planilla.estado_pago,
      ]),
      startY: 30, // Posición vertical para la tabla
      theme: "grid", // Estilo de la tabla
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
