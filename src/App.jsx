import React from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import UserDashboard from './UserDashboard/UserDashboard';
import PlanillaView from "./EmployeeDashboard/PlanillaView";
import CrearPlanilla from "./EmployeeDashboard/CrearPlanilla";
import FormularioCita from "./Citas/FormularioCita";
import VistaCalendario from "./Citas/VistaClendario";
import EditarCita from "./Citas/EditarCitas";



function App() {
  return (
    <div>
      <EditarCita />
    </div>
  );
}

export default App;
