import React from "react";
import Navbar from "../Navbar/NavbarLogiado";
import "./PlanillaView.css"; // Crear un archivo CSS para los estilos

function PlanillaView() {
  return (
    <>
      <Navbar />
      <section className="planilla-section">
        <div className="planilla-container">
          <h2>Planilla</h2>
          <table className="planilla-table">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023-09-10</td>
                <td>2023-09-01</td>
                <td>2023-09-30</td>
                <td>$500.00</td>
                <td>$50.00</td>
                <td>$30.00</td>
                <td>$520.00</td>
                <td>Transferencia</td>
                <td>Pagado</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2023-08-10</td>
                <td>2023-08-01</td>
                <td>2023-08-30</td>
                <td>$500.00</td>
                <td>$60.00</td>
                <td>$40.00</td>
                <td>$520.00</td>
                <td>Efectivo</td>
                <td>Pagado</td>
              </tr>
              {/* Agregar más filas de planillas si es necesario */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default PlanillaView;
