import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/NavbarEmployee";
import Footer from "../Footer/Footer";
import axios from "axios";
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

  return (
    <>
      <Navbar />
      <section className="planilla-section">
        <div className="planilla-container">
          <h2>Planilla</h2>
          {error && <p className="text-danger">{error}</p>} {/* Mostrar error si ocurre */}
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
              </tr>
            </thead>
            <tbody>
              {planillas.length > 0 ? (
                planillas.map((planilla) => (
                  <tr key={planilla.id_planilla}>
                    <td>{planilla.id_planilla}</td>
                    <td>{planilla.Usuario?.nombre || "Desconocido"}</td> {/* Mostrar nombre del empleado */}
                    <td>{new Date(planilla.fecha_pago).toLocaleDateString()}</td>
                    <td>{new Date(planilla.periodo_inicial).toLocaleDateString()}</td>
                    <td>{new Date(planilla.periodo_fin).toLocaleDateString()}</td>
                    <td>{formatCurrency(planilla.salario_base)}</td>
                    <td>{formatCurrency(planilla.bonificaciones)}</td>
                    <td>{formatCurrency(planilla.deducciones)}</td>
                    <td>{formatCurrency(planilla.monto_total)}</td>
                    <td>{planilla.metodo_pago}</td>
                    <td>{planilla.estado_pago}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11">No hay planillas disponibles</td>
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
